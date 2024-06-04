import { DropdownProfile } from "./dropdownProfile"

export const Navbar = () => {
    return(
        <>
            <nav className="fixed left-0 right-0 top-0 z-30 px-4 py-2 bg-white border-b border-gray-200">
                <div className="flex justify-between">
                    <div className="flex justify-between items-center px-5">
                        <p className="text-2xl font-semibold">Logo</p>
                        {/* <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                d="M5 7h14M5 12h14M5 17h10" />
                        </svg> */}
                    </div>
                    <div className="">
                        <DropdownProfile />
                    </div>
                </div>
            </nav>
        </>
    )
}