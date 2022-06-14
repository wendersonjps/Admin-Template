import Image from 'next/image'
import router from 'next/router'

import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForceAuth(props) {

    const { user, } = useAuth()

    function renderContent() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={loading} />
            </div>
        )
    }

    if (!loading && user?.email) {
        return renderContent()
    } else if (loading) {
        return renderLoading()
    } else {
        router.push('/auth')
        return null
    }
}