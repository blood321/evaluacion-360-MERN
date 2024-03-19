import Sidebar_A from '../components/Sidebar_A'
import Header from '../components/Header'
import Inicio from '../components/inicio'
import Footer from '../components/Footer'

const Admin = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="flex flex-col mx-auto">
            <div className="w-full border">
                <Header />
            </div>
            {isSmallScreen ? (
                <div className="w-full border">
                    <Sidebar_A />
                    <div>
                        <Inicio />
                    </div>
                    <Footer />
                </div>
            ) : (
                <div className="w-full border">
                    <div>
                        <Inicio />
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Admin
