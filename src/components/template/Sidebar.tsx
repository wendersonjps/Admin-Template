import MenuItem from './MenuItem'
import { IconHome, IconNotification, IconSettings } from '../icons/index'
import Logo from './Logo'

export default function Sidebar() {
    return (
        <aside>
            <div className={` flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}>
                <Logo />
            </div>
            <ul>
                <MenuItem url='/' text='Início' icon={IconHome} />
                <MenuItem url='/settings' text='Ajustes' icon={IconSettings} />
                <MenuItem url='/notifications' text='News!' icon={IconNotification} />
            </ul>
        </aside>
    )
}