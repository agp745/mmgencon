import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import type { ClientPath } from "@lib/types"
import { MenuLink } from "./MenuLink"
import { QuoteButton } from "./QuoteButton"

export function Menu() {

    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [path, setPath] = useState<string | null>(null)

    const { pathname } = useLocation()

    useEffect(() => {
        setPath(pathname)
    }, [path])

    const handleClick = (page: ClientPath) => {
        setIsClicked(!isClicked)
        setPath(page)
    }

    const linkStyles = 'active:scale-95 hover:underline hover:underline-offset-4'

    return (
        <nav className="flex justify-between py-2 px-5 bg-white bg-opacity-80">
            <img src="/assets/logo-enhanced.png" alt="logo" className="h-full w-20 pt-1"/>
            <div className="font-bold tracking-wide flex flex-col justify-center text-center">
                <h1 className="text-3xl">MM General Contracting</h1>
                <p className="text-lg font-light tracking-widest">making spaces better</p>
            </div>
            <div className="flex gap-5 self-end">
                {path === "/home" ? (
                        <div className="text-green-600">Home</div>
                    ) : (
                        <MenuLink path="/home" handleClick={handleClick} styles={linkStyles} />
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
                <div>|</div>
                <div>
                    <a className="text-blue-500 font-semibold p-1 hover:bg-blue-100/70 rounded-md cursor-pointer transition-all duration-100 ease-in">Get a Quote</a>
                </div>
            </div>
        </nav>
    )
}