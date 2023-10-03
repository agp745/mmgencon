import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import type { ClientPath } from "lib/types"
import { MenuLink } from "./MenuLink"


import { useSelector, useDispatch } from "react-redux"
import { updatePath } from "../../app/pathSlice"
import type { RootState } from "../../app/store"

export function MobileMenu() {

    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [fadeAnimation, setFadeAnimation] = useState<"SHOW_MENU" | "HIDE_MENU">("SHOW_MENU")
    const path = useSelector((state: RootState) => state.path.pathname)

    const { pathname } = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updatePath(pathname))
    }, [path])

    const handleClick = (page: ClientPath) => {
        setIsClicked(!isClicked)
        dispatch(updatePath(page))
    }

    const menuFade = () => {
        if (!isClicked) {
            setFadeAnimation("SHOW_MENU")
            setIsClicked(!isClicked)
        } else {
            setFadeAnimation("HIDE_MENU")
            setTimeout(() => {
                setIsClicked(!isClicked)
            }, 150)
        }
    }

    const HiddenMenu = () => {
        return (
            //removed `lg:hidden` from <section> styles
            <section className="MOBILE-MENU justify-between py-2 px-5 flex bg-white">
                <a href="/home"><img src="/assets/logo-enhanced.png" alt="logo" className="w-12"/></a>
                
                <div className="font-light tracking-wider text-xl">
                    MM General Contracting
                </div>

                <button
                    onClick={menuFade}
                    className="HAMBURGER-ICON space-y-1.5"
                >
                    <Bars3Icon className="text-black w-7 h-7" />
                </button>
            </section>
        )
    }

    const linkStyles = "active:scale-95 hover:underline hover:underline-offset-4"
    const currentPageLinkColor = 'text-sky-600 font-semibold'

    const VisibleMenu = () => {
        return (
            <menu className={`fixed top-0 left-0 bottom-0 right-0 bg-white w-full h-full ${fadeAnimation}`}>
                <section className="flex flex-col items-center justify-between">
                    <div className="flex justify-end w-full py-2 px-5">
                        <button onClick={menuFade}>
                            <XMarkIcon className="text-black w-7 h-7"/>
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-2xl font-extralight">
                        {path === "/home" ? (
                            <div className={currentPageLinkColor}>Home</div>
                        ) : (
                            <MenuLink path="/home" handleClick={handleClick}  styles={linkStyles} />
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
                        {path === "/careers" ? (
                            <div className={currentPageLinkColor}>Work with us</div>
                        ) : (
                            <MenuLink path="/careers" handleClick={handleClick} styles={linkStyles} />
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-3 border-t border-slate-300 text-2xl font-extralight mt-3 p-3">
                            <a href="https://form.jotform.com/230184112380141" target="_blank" className="hover:bg-blue-100 hover:px-2 hover:py-1 hover:rounded transition-all duration-75 ease-in">Residential Quote</a>
                            <a href="mailto: mike.a@mmgencon.com" target="_blank" className="hover:bg-blue-100 hover:px-2 hover:py-1 hover:rounded transition-all duration-75 ease-in">Commercial Quote</a>
                    </div>

                    <div className="flex flex-col items-center mt-20 p-5">
                        <img src="/assets/logo-enhanced.png" alt="logo" className="w-20"/>
                        <p className="tracking-widest font-light pt-2 text-xl">
                            making spaces better
                        </p>
                    </div>
                </section>
            </menu>
        )
    }

    return (
        <div id="HAMBURGER-MENU">
            {isClicked ? <VisibleMenu /> : <HiddenMenu />}
        </div>
    )
}