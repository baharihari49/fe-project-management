
import { useState } from "react"
import { DropDownWorkspace } from "./dropdownWorkspace";

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <aside className="w-64 fixed mt-14 top-0 left-0 z-40 w-64 border h-screen bg-white">
            <div className="py-2">
                <div className="flex justify-between items-center px-2">
                    <DropDownWorkspace/>
                </div>
                <div className="mt-5 mx-3">
                    <div className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                        </svg>
                        <p className="text-sm font-medium">
                            Home
                        </p>
                    </div>

                    <hr className="my-3" />

                    <div style={{transition: 'height 500ms ease-in-out'}} className={`${!isOpen ? `h-10` : `h-[12rem]`} overflow-hidden`}>
                            <div onClick={()=> setIsOpen(!isOpen)} className="flex items-center gap-3 py-2 px-2
                                rounded-md hover:bg-gray-100">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                        d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                </svg>
                                <p className="text-sm font-medium">
                                    Workspace
                                </p>
                            </div>
                            <div>
                                <ul className="space-y-3 mx-12 mt-3">
                                    <li>test 1</li>
                                    <li>test 2</li>
                                    <li>test 3</li>
                                    <li>test 4</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

