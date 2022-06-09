import MenuItem from './MenuItem'
import { IconHome, IconLogout, IconNotification, IconSettings } from '../icons/index'
import Logo from './Logo'

export default function Sidebar() {
    return (
        <aside className={`flex flex-col`}>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url='/' text='Início' icon={IconHome} />
                <MenuItem url='/settings' text='Ajustes' icon={IconSettings} />
                <MenuItem url='/notifications' text='News!' icon={IconNotification} />
            </ul>
            <ul>
                <MenuItem text='Sair' icon={IconLogout} onClick={() => console.log('logout')} className={`text-red-500 hover:bg-red-400 hover:text-white`} />
            </ul>
        </aside>
    )
}