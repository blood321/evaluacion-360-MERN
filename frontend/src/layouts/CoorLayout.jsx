import { Outlet } from 'react-router-dom'

const CoorLayout = () => {
    return (
        <>
            <main className="container mx-auto py-32 md:grid md:justify-items-center">
                <div className="md:w-2/3 lg:w-2/5">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default CoorLayout
