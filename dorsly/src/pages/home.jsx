import React from "react"

import "../static/general.css"

import Footer from "../components/footer"
import Header from "../components/header"
import Partner from "../components/partner"

export default function home() {
  return (
    <>
      <Header />
      <Partner/>
      <Footer />
    </>
  )
}
