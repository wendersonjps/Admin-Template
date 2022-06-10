import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notifications() {
  const { themeToggle } = useAppData()

  return (
    <Layout title="Notificações" subtitle="Novidades aqui!">
      <button onClick={themeToggle}>Alternar Tema!</button>
    </Layout>
  )
}
