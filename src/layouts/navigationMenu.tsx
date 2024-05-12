import { BreadcrumbComponent } from "./breadCrumb"

export const NavigationMenuComponent = () => {
    return(
        <>
            <div className="py-4 px-2 bg-white" style={{borderBottom : '0.5px solid', borderColor: '#cbd5e1'}}>
                <BreadcrumbComponent/>
            </div>
        </>
    )
}