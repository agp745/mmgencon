import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Menu() {

  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [path, setPath] = useState<string | null>(null)
  const { pathname } = useLocation() 

  useEffect(() => {
    setPath(pathname)
  }, [path])

  const handleClick = (page: string) => {
    setIsClicked(!isClicked)
    setPath(page)
  }

  const HiddenMenu = () => {
    return (
    <section className="MOBILE-MENU flex lg:hidden">
      <button onClick={() => setIsClicked(!isClicked)} className="HAMBURGER-ICON space-y-1.5 mt-2.5">
        <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
      </button>
    </section>
    )
  }

  const VisibleMenu = () => {
    return (
    <menu className="fixed top-0 left-0 bottom-0 right-0 bg-white w-full h-full">
      <section className="flex flex-col items-center">
        <div className="flex justify-end w-full py-2 px-5">
          <button onClick={() => setIsClicked(!isClicked)}>
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              >
                  
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 text-2xl font-extralight">
          {path === '/home' ? <div className="text-green-600">Home</div> : <Link to='/home' onClick={() => handleClick('/home')} className="active:scale-95 hover:underline hover:underline-offset-4">Home</Link>}
          {path === '/about' ? <div className="text-green-600">About</div> : <Link to='/about' onClick={() => handleClick('/about')} className="active:scale-95 hover:underline hover:underline-offset-4">About</Link>}
          {path === '/services' ? <div className="text-green-600">Services</div> : <Link to='/services' onClick={() => handleClick('/services')} className="active:scale-95 hover:underline hover:underline-offset-4">Services</Link>}
          {path === '/service-area' ? <div className="text-green-600">Service Area</div> : <Link to='/service-area' onClick={() => handleClick('/service-area')} className="active:scale-95 hover:underline hover:underline-offset-4">Service Area</Link>}
          {path === '/contact' ? <div className="text-green-600">Contact</div> : <Link to='/contact' onClick={() => handleClick('/contact')} className="active:scale-95 hover:underline hover:underline-offset-4">Contact</Link>}
          {path === '/gallery' ? <div className="text-green-600">Gallery</div> : <Link to='/gallery' onClick={() => handleClick('/gallery')} className="active:scale-95 hover:underline hover:underline-offset-4">Gallery</Link>}
          <a href="https://form.jotform.com/230184112380141" target="_blank" className="mt-10 border-2 border-green-700 border-solid px-2 py-1 rounded-md font-light hover:cursor-pointer">request a quote</a>
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


function Header() {

  return (
    <nav className="flex justify-between py-2 px-5">
      <img src="/assets/react.svg" alt="logo" />
      <div id="button">
        <a href="https://form.jotform.com/230184112380141" target="_blank" className="border-2 border-green-700 border-solid px-2 py-1 rounded-md font-light hover:cursor-pointer">request a quote</a>
      </div>
      <Menu />
    </nav>
  )

}

export default function App(props:{children: React.ReactNode}) {

  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
