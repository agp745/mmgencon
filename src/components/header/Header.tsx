import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MobileMenu } from "./MobileMenu"
import { Menu } from "./Menu"
import { useSelector, useDispatch } from "react-redux"
import { updatePath } from "../../app/pathSlice"
import type { RootState } from "../../app/store"

export function Header() {

    const {pathname} = useLocation()

    const dispatch = useDispatch()

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
    const path = useSelector((state: RootState) => state.path.pathname)


    useEffect(() => {
        addEventListener("resize",() => setScreenWidth(window.innerWidth))
        dispatch(updatePath(pathname))
    }, [path])

    return (
        <section className="fixed top-0 left-0 right-0 h-5">
                {screenWidth > 600 ? <Menu /> : <MobileMenu />}
        </section>
        // <>
        // {path === '/home' ? (
        //     <section className="fixed top-0 left-0 right-0 h-5">
        //         {screenWidth > 600 ? <Menu /> : <MobileMenu />}
        //     </section>
        // ):  (
        //     <section className="w-full h-5 bg-red-600">
        //         {screenWidth > 600 ? <Menu /> : <MobileMenu />}
        //     </section>
        // )}
        // </>
    )
}
