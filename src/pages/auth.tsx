import { useState } from 'react'

import AuthInput from '../components/auth/AuthInput'

export default function Auth() {
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submit() {
        if (mode === 'login') {
            console.log('login')
        } else {
            console.log('register')
        }
    }

    return (
        <div className={`flex flex-col h-screen items-center justify-center`}>
            <div className={`w-1/2`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma!'}
                </h1>
                <AuthInput label="Email" type="email" value={email} valueChanged={setEmail} required />
                <AuthInput label="Senha" type="password" value={password} valueChanged={setPassword} required />

                <button onClick={submit} className={`w-full px-4 py-3 mt-6 rounded-lg text-white bg-indigo-500 hover:bg-indigo-400`}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className={`my-6 w-full border-gray-300`} />

                <button onClick={submit} className={`w-full px-4 py-3 rounded-lg text-white bg-red-500 hover:bg-red-400`}>
                    Entrar com Google
                </button>
            </div>
        </div>
    )

}