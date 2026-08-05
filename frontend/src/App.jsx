import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skill from "./pages/Skill"
import ContactForm from "./pages/ContactForm"
import Education from "./pages/Education"
import Project from "./pages/Project"
import Footer from "./pages/Footer"
import { useState } from "react"



function App() {
  const [theme, setTheme] = useState("light")

  const changeTheme = ()=>{
    setTheme(theme === "light" ? "dark" : "light")
  }
  
  

  return (
    <div >
      
      
      <Navbar theme={theme} changeTheme={changeTheme}   />
      <Home theme={theme}/>
      <About theme={theme} />
    
      <Skill/>
      <Education theme={theme}/>
      <Project/>
      <ContactForm/>
      <Footer/>

    </div>
  )
}

export default App

