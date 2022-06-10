import Title from './Title'
import { ThemeButton } from './ThemeButton'
import useAppData from '../../data/hook/useAppData'

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const { theme, themeToggle } = useAppData()

    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle} />
            <div className={`flex flex-grow justify-end`}>
                <ThemeButton theme={theme} themeToggle={themeToggle} />
            </div>
        </div>
    )
}