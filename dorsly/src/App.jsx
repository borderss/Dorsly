import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "../src/static/css/general.css"

import Authentificaton from "./pages/authentificaton"
import MainProductPage from "./pages/mainProductPage"
import Place from "./pages/place"
import Admin from "./pages/admin"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Header from './components/header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes history={history}>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Authentificaton page="login"/>} />
        <Route path="/register" element={<Authentificaton page="register"/>} />
        
        <Route path="/products" element={<MainProductPage/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/place/:id" element={<Place noid={false}/>} />
        <Route path="/place" element={<Place noid={true}/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}