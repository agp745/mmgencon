import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { updatePath } from "./app/pathSlice"
import type { RootState } from "./app/store"

export default function App(props:{children: React.ReactNode}) {

  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const path = useSelector((state: RootState) => state.path.pathname)

  useEffect(() => {
    dispatch(updatePath(pathname))
  }, [path])


  return (
    <main className="flex flex-col">
          {props.children} 
          <Header />
          <Footer />
        </main>
    // <>
    //   {path === '/home' ? (
    //     <main className="flex flex-col">
    //       {props.children} 
    //       <Header />
    //       <Footer />
    //     </main>
    //   ) : (
    //     <main className="flex flex-col">
    //       <Header />
    //       {props.children} 
    //       <div>not home</div>
    //       <Footer />
    //     </main>
    //   )}
    // </>
  )
}
