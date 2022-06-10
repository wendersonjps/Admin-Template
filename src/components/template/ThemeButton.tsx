import { IconMoon, IconSun } from "../icons/index"

interface ThemeButtonProps {
    theme: string
    themeToggle: () => void
}

export function ThemeButton(props: ThemeButtonProps) {
    return props.theme === 'dark' ? (
        <div onClick={props.themeToggle} className={`hidden sm:flex items-center justify-start cursor-pointer w-14 lg:w-24 h-8 p-1 rounded-full bg-gradient-to-r from-yellow-300 to-orange-600`}>
            <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-white text-orange-500`}>
                {IconSun}
            </div>
        </div>
    ) : (
        <div onClick={props.themeToggle} className={`hidden sm:flex items-center justify-end cursor-pointer w-14 lg:w-24 h-8 p-1 rounded-full bg-gradient-to-r from-gray-500 to-gray-900`}>
            <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-yellow-300 `}>
                {IconMoon}
            </div>
        </div>
    )
}