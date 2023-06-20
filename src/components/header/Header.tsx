import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"

function Menu() {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [path, setPath] = useState<string | null>(null)
    const [fadeAnimation, setFadeAnimation] = useState<"SHOW_MENU" | "HIDE_MENU">("SHOW_MENU")

    const { pathname } = useLocation()

    useEffect(() => {
        setPath(pathname)
    }, [path])

    const handleClick = (page: string) => {
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
            <section className="MOBILE-MENU justify-between py-2 px-5 flex lg:hidden">
            <img src="/assets/react.svg" alt="logo" />
            <div id="button">
                <a
                    href="https://form.jotform.com/230184112380141"
                    target="_blank"
                    className="border-2 border-green-700 border-solid px-2 py-1 rounded-md font-light hover:cursor-pointer"
                    >
                    request a quote
                </a>
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
                            <Link
                                to="/home"
                                onClick={() => handleClick("/home")}
                                className="active:scale-95 hover:underline hover:underline-offset-4"
                            >
                                Home
                            </Link>
                        )}
                        {path === "/about" ? (
                            <div className="text-green-600">About</div>
                        ) : (
                            <Link
                                to="/about"
                                onClick={() => handleClick("/about")}
                                className="active:scale-95 hover:underline hover:underline-offset-4"
                            >
                                About
                            </Link>
                        )}
                        {path === "/services" ? (
                            <div className="text-green-600">Services</div>
                        ) : (
                            <Link
                                to="/services"
                                onClick={() => handleClick("/services")}
                                className="active:scale-95 hover:underline hover:underline-offset-4"
                            >
                                Services
                            </Link>
                        )}
                        {path === "/service-area" ? (
                            <div className="text-green-600">Service Area</div>
                        ) : (
                            <Link
                                to="/service-area"
                                onClick={() => handleClick("/service-area")}
                                className="active:scale-95 hover:underline hover:underline-offset-4"
                            >
                                Service Area
                            </Link>
                        )}
                        {path === "/contact" ? (
                            <div className="text-green-600">Contact</div>
                        ) : (
                            <Link
                                to="/contact"
                                onClick={() => handleClick("/contact")}
                                className="active:scale-95 hover:underline hover:underline-offset-4"
                            >
                                Contact
                            </Link>
                        )}
                        {path === "/gallery" ? (
                            <div className="text-green-600">Gallery</div>
                        ) : (
                            <Link
                                to="/gallery"
                                onClick={() => handleClick("/gallery")}
                                className="active:scale-95 hover:underline hover:underline-offset-4"
                            >
                                Gallery
                            </Link>
                        )}
                        <a
                            href="https://form.jotform.com/230184112380141"
                            target="_blank"
                            className="mt-10 border-2 border-green-700 border-solid px-2 py-1 rounded-md font-light hover:cursor-pointer"
                        >
                            request a quote
                        </a>
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

export function Header() {
    return (
        <section className="fixed top-0 left-0 right-0 h-5">
            <Menu />
        </section>
    )
}
