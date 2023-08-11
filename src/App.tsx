import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Home } from "./pages/home"

export default function App(props:{children: React.ReactNode}) {

  return (
    <main className="flex flex-col">
      {props.children}
      <Footer />
      <Header />
    </main>
  )
}
