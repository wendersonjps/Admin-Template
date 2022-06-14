import { createContext, useEffect, useState } from 'react'

interface AppContextProps {
    theme?: string
    themeToggle?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme, setTheme] = useState('')

    function themeToggle() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme)
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            themeToggle
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext