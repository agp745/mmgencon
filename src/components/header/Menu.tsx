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
        <nav className="flex justify-between py-2 px-5 bg-white">
            <img src="/assets/logo-enhanced.png" alt="logo" className="h-full w-12"/>
            <div className="text-2xl font-bold tracking-wide">MM General Contracting</div>
            <div className="flex gap-5">
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
                <QuoteButton extraStyles=""/>
            </div>
        </nav>
    )
}