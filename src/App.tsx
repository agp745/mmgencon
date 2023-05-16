import React from "react";

function Menu() {

  return (
    <div id="hambuger">
    <section className="MOBILE-MENU flex lg:hidden">
      <div className="HAMBURGER-ICON space-y-2">
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>

      <div>
        <div
          className="absolute top-0 right-0 px-8 py-8"
        >
          {/* <svg
            THIS IS THE X
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
          </svg> */}
        </div>
        {/* <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/about">About</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      </div>
    </section>

    {/* <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/portfolio">Portfolio</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul> */}
  </div>
  )

}


function Header() {

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

export default function App(props:{children: React.ReactNode}) {

  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
