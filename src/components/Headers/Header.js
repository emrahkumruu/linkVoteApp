export default function Header() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                <span className="px-5 text-2xl text-white font-extrabold">
                                    Link
                                    <span className="font-thin">VOTE</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}