
import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import MyServices from "./pages/MyServices"
import initFontAwesome from "./components/initFontAwesome";
initFontAwesome();

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/myservices" element={<MyServices />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
