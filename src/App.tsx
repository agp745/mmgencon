import React from "react";
import { Header } from "./components/header";

export default function App(props:{children: React.ReactNode}) {

  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
