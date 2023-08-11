import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import type { ClientPath } from "@lib/types"
import { MenuLink } from "./MenuLink"

import { useSelector, useDispatch } from "react-redux"
import { updatePath } from "../../app/pathSlice"
import type { RootState } from "../../app/store"

export function Menu() {

    const { pathname } = useLocation()
    const dispatch = useDispatch()

    const path = useSelector((state: RootState) => state.path.pathname)
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [bgOpacity, setBgOpacity] = useState<string>("")
    

    useEffect(() => {
        dispatch(updatePath(pathname))
        if(path === '/home') {
            setBgOpacity("bg-opacity-80")
        } else {
            setBgOpacity("bg-opacity-100")
        }
    }, [path])

    const handleClick = (page: ClientPath) => {
        setIsClicked(!isClicked)
        dispatch(updatePath(page))
    }

    const linkStyles = 'active:scale-95 hover:underline hover:underline-offset-4'
    const currentPageLinkColor = 'text-sky-600 font-semibold'

    return (
        <nav className={`flex justify-between py-2 px-5 bg-white ${bgOpacity}`}>
            <img src="/assets/logo-enhanced.png" alt="logo" className="h-full w-20 pt-1"/>
            <div className="font-bold tracking-wide flex flex-col justify-center text-center">
                <h1 className="text-3xl">MM General Contracting</h1>
                <p className="text-lg font-light tracking-widest">making spaces better</p>
            </div>
            <div className="flex gap-5 self-end">
                {path === "/home" ? (
                        <div className={currentPageLinkColor}>Home</div>
                    ) : (
                        <MenuLink path="/home" handleClick={handleClick} styles={linkStyles} />
                )}
                {path === "/about" ? (
                        <div className={currentPageLinkColor}>About</div>
                    ) : (
                        <MenuLink path="/about" handleClick={handleClick} styles={linkStyles} />
                )}
                {path === "/services" ? (
                        <div className={currentPageLinkColor}>Services</div>
                    ) : (
                        <MenuLink path="/services" handleClick={handleClick} styles={linkStyles} />
                )}
                {path === "/service-area" ? (
                        <div className={currentPageLinkColor}>Service Area</div>
                    ) : (
                        <MenuLink path="/service-area" handleClick={handleClick} styles={linkStyles} />
                )}
                {path === "/contact" ? (
                        <div className={currentPageLinkColor}>Contact</div>
                    ) : (
                        <MenuLink path="/contact" handleClick={handleClick} styles={linkStyles} />
                )}
                {path === "/gallery" ? (
                        <div className={currentPageLinkColor}>Gallery</div>
                    ) : (
                        <MenuLink path="/gallery" handleClick={handleClick} styles={linkStyles} />
                )}
                <div>|</div>
                <div>
                    <a className="text-blue-500 font-semibold p-1 hover:bg-blue-100/70 rounded-md cursor-pointer transition-all duration-100 ease-in">Get a Quote</a>
                </div>
            </div>
        </nav>
    )
}