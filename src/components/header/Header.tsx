import { useState, useEffect } from "react"
import { MobileMenu } from "./MobileMenu"
import { Menu } from "./Menu"

export function Header() {

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        addEventListener("resize",() => setScreenWidth(window.innerWidth))
    }, [])

    return (
        <section className="fixed top-0 left-0 right-0 h-5">
            {screenWidth > 600 ? <Menu /> : <MobileMenu />}
        </section>
    )
}
