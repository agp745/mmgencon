import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import type { ClientPath } from "@lib/types"
import { MenuLink } from "./MenuLink"
import { QuoteButton } from "./QuoteButton"

export function MobileMenu() {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [path, setPath] = useState<string | null>(null)
    const [fadeAnimation, setFadeAnimation] = useState<"SHOW_MENU" | "HIDE_MENU">("SHOW_MENU")

    const { pathname } = useLocation()

    useEffect(() => {
        setPath(pathname)
    }, [path])

    const handleClick = (page: ClientPath) => {
        setIsClicked(!isClicked)
        setPath(page)
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
                <img src="/assets/react.svg" alt="logo" />
                <QuoteButton extraStyles=""/>
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

    const VisibleMenu = () => {
        return (
            <menu className={`fixed top-0 left-0 bottom-0 right-0 bg-white w-full h-full ${fadeAnimation}`}>
                <section className="flex flex-col items-center">
                    <div className="flex justify-end w-full py-2 px-5">
                        <button onClick={menuFade}>
                            <XMarkIcon className="text-black w-7 h-7"/>
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-2xl font-extralight">
                        {path === "/home" ? (
                            <div className="text-green-600">Home</div>
                        ) : (
                            <MenuLink path="/home" handleClick={handleClick}  styles={linkStyles} />
                        )}
                        {path === "/about" ? (
                            <div className="text-green-600">About</div>
                        ) : (
                            <MenuLink path="/about" handleClick={handleClick} styles={linkStyles} />
                        )}
                        {path === "/services" ? (
                            <div className="text-green-600">Services</div>
                        ) : (
                            <MenuLink path="/services" handleClick={handleClick} styles={linkStyles} />
                        )}
                        {path === "/service-area" ? (
                            <div className="text-green-600">Service Area</div>
                        ) : (
                            <MenuLink path="/service-area" handleClick={handleClick} styles={linkStyles} />
                        )}
                        {path === "/contact" ? (
                            <div className="text-green-600">Contact</div>
                        ) : (
                            <MenuLink path="/contact" handleClick={handleClick} styles={linkStyles} />
                        )}
                        {path === "/gallery" ? (
                            <div className="text-green-600">Gallery</div>
                        ) : (
                            <MenuLink path="/gallery" handleClick={handleClick} styles={linkStyles} />
                        )}
                        <QuoteButton extraStyles="mt-10" />
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