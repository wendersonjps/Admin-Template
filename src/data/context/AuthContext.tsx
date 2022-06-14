import { createContext, useEffect, useState } from 'react'
import route from 'next/router'
import Cookies from 'js-cookie'

import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps {
    user?: User
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function standardUser(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imageUrl: userFirebase.photoUrl
    }
}

function manageCookie(logged: boolean) {
    if (logged) {
        Cookies.set('admin-template-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    async function sessionConfigure(userFirebase) {
        if (userFirebase?.email) {
            const user = await standardUser(userFirebase)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            sessionConfigure(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await sessionConfigure(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(sessionConfigure)
            return () => cancel()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, loginGoogle, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext