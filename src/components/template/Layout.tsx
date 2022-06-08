import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Content'

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <Sidebar />
            <Header title={props.title} subtitle={props.subtitle} />
            <Content>
                {props.children}
            </Content>
        </div>
    )
}