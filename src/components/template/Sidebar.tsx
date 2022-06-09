import MenuItem from './MenuItem'
import { IconHome, IconNotification, IconSettings } from '../icons/index'

export default function Sidebar() {
    return (
        <aside>
            <ul>
                <MenuItem url='/' text='Início' icon={IconHome} />
                <MenuItem url='/settings' text='Ajustes' icon={IconSettings} />
                <MenuItem url='/notifications' text='News!' icon={IconNotification} />
            </ul>
        </aside>
    )
}