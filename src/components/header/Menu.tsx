import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import type { ClientPath } from "lib/types"
import { MenuLink } from "./MenuLink"
import { QuotePopover } from "../quoteDropdown"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

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
            <div className="flex flex-col justify-center text-center text-slate-800">
                <h1 className="text-3xl font-normal tracking-wide ">MM General Contracting</h1>
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
                {path === "/gallery" ? (
                        <div className={currentPageLinkColor}>Gallery</div>
                    ) : (
                        <MenuLink path="/gallery" handleClick={handleClick} styles={linkStyles} />
                )}
                <div>|</div>
                <QuotePopover 
                    Trigger = {<a className="flex gap-1 text-blue-500 font-semibold p-1 hover:bg-blue-100/70 rounded-md cursor-pointer transition-all duration-100 ease-in -mt-1"><p>Get a Quote</p><ChevronDownIcon className="w-4 h-4 mt-1" /></a>}                    
                />
                {path === "/careers" ? (
                        <div className={currentPageLinkColor}>Work with us</div>
                    ) : (
                        <MenuLink path="/careers" handleClick={handleClick} styles={linkStyles} />
                )}
            </div>
        </nav>
    )
}