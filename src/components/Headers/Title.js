
export default function Title({ pageName }) {

    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-bold text-gray-900">
                        {pageName}
                    </h1>
                </div>
            </header>
        </>
    )
}

