import { NavigationMenuComponent } from "./navigationMenu"

export const Main = () => {
    return (
        <>
            <div className="md:ml-64 h-screen bg-gray-50">
                <div className="pt-14">
                    <NavigationMenuComponent/>
                </div>
            </div>
        </>
    )
}