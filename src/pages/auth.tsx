import { useState } from 'react'

import { IconWarning } from '../components/icons/index'
import AuthInput from '../components/auth/AuthInput'
import useAuth from '../data/hook/useAuth'

export default function Auth() {

    const { register, login, loginGoogle } = useAuth()

    const [error, setError] = useState(null)
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function showError(msg, time = 5) {
        setError(msg)
        setTimeout(() => setError(null), time * 1000)
    }

    async function submit() {
        try {
            if (mode === 'login') {
                await login(email, password)
            } else {
                await register(email, password)
            }
        } catch (e) {
            showError(e?.message ?? 'Ops! Ocorreu um erro!')
        }
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img src="https://source.unsplash.com/random" alt="Imagem da tela de autenticação" className={`h-screen w-full object-cover`} />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-2/3`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma!'}
                </h1>

                {error ? (
                    <div className={`flex items-center py-3 px-5 my-2 rounded-lg border-2 bg-red-400 text-white border-red-600`}>
                        {IconWarning}
                        <span className={`ml-3`}>{error}</span>
                    </div>
                ) : false}

                <AuthInput label="Email" type="email" value={email} valueChanged={setEmail} required />
                <AuthInput label="Senha" type="password" value={password} valueChanged={setPassword} required />

                <button onClick={submit} className={`w-full px-4 py-3 mt-6 rounded-lg text-white bg-indigo-500 hover:bg-indigo-400`}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className={`my-6 w-full border-gray-300`} />

                <button onClick={loginGoogle} className={`w-full px-4 py-3 rounded-lg text-white bg-red-500 hover:bg-red-400`}>
                    Entrar com Google
                </button>

                {mode === 'login' ? (
                    <p className={`mt-8`}>
                        Novo por aqui?
                        <a onClick={() => setMode('register')} className={`font-semibold cursor-pointer text-blue-500 hover:text-blue-700`}> Crie sua conta!</a>
                    </p>
                ) : (
                    <p className={`mt-8 justify-center `}>
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setMode('login')} className={`font-semibold cursor-pointer text-blue-500 hover:text-blue-700`}> Faça o login!</a>
                    </p>
                )}
            </div>
        </div>
    )

}