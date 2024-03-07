import Sidebar_A from '../components/Sidebar_A'
import Header from '../components/Header'
import Inicio from '../components/inicio'
import Footer from '../components/Footer'

const Admin = () => {
    document.body.style.overflowY = 'hidden'
    return (
        <>
            <div className="flex">
                <div className="basis-[15%] h-full border">
                    <Sidebar_A />
                </div>
                <div className="basis-[85%] border">
                    <Header />
                    <div>
                        <Inicio />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Admin
