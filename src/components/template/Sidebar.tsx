import MenuItem from './MenuItem'
import { IconHome, IconNotification, IconSettings } from '../icons/index'

export default function Sidebar() {
    return (
        <aside>
            <ul>
                <MenuItem url='/' text='Início' icon={IconHome} />
                <MenuItem url='/settings' text='Configuração' icon={IconSettings} />
                <MenuItem url='/notification' text='Notificações' icon={IconNotification} />
            </ul>
        </aside>
    )
}