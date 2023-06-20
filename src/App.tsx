import { Header } from "./components/header"
import { Footer } from "./components/footer"

export default function App(props:{children: React.ReactNode}) {

  return (
    <>
      {props.children}
      <Footer />
      <Header />
    </>
  )
}
