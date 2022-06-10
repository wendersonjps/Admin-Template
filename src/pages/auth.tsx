import { useState } from 'react'

import AuthInput from '../components/auth/AuthInput'

export default function Auth() {
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h1>Autenticação</h1>
            <AuthInput label="Email" type="email" value={email} valueChanged={setEmail} required />
            <AuthInput label="Senha" type="password" value={password} valueChanged={setPassword} required />
        </div>
    )
}