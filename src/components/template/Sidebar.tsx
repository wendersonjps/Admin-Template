import MenuItem from './MenuItem'
import { IconHome, IconLogout, IconNotification, IconSettings } from '../icons/index'
import Logo from './Logo'
import useAuth from '../../data/hook/useAuth'

export default function Sidebar() {

    const { logout } = useAuth()

    return (
        <aside className={`flex flex-col bg-gray-200 text-gray-900 dark:bg-gray-900`}>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url='/' text='Início' icon={IconHome} />
                <MenuItem url='/settings' text='Ajustes' icon={IconSettings} />
                <MenuItem url='/notifications' text='News!' icon={IconNotification} />
            </ul>
            <ul>
                <MenuItem text='Sair' icon={IconLogout} onClick={logout} className={`text-red-500 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-white`} />
            </ul>
        </aside>
    )
}