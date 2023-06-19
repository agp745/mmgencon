import { Bars3Icon } from '@heroicons/react/24/outline'

function Menu() {

    return (
        <section className="MOBILE-MENU flex lg:hidden">
            <div className="absolute top-0 right-0 px-8 py-8">
                <Bars3Icon />
            </div>
        </section>
    )
  
}
  
  
export function Header() {
  
    return (
    <nav className="flex justify-between">
        <img src="/assets/react.svg" alt="logo" />
        <div id="button">
            <button className="border-2 border-green-700 border-solid px-2 py-1 rounded-sm font-light">request a quote</button>
        </div>
        <Menu />
    </nav>
    )
  
}