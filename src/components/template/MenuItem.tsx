import Link from 'next/link'

interface MenuItemProps {
    text: string
    icon: any
    url?: string
    className?: string
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <a className={`flex flex-col justify-center items-center w-20 h-20 dark:text-gray-400 ${props.className}`}>
                {props.icon}
                <span className={`text-sm`}>
                    {props.text}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800`}>
            {props.url ? (
                <Link href={props.url}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}
        </li>
    )
}