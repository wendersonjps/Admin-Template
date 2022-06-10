import { createContext, useState } from 'react'

type Theme = 'dark' | ''

interface AppContextProps {
    theme?: Theme
    themeToggle?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme, setTheme] = useState<Theme>('')

    function themeToggle() {
        setTheme(theme === '' ? 'dark' : '')
    }

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