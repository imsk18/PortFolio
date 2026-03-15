import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Skill from "./components/pages/Skill"
import ContactForm from "./components/pages/ContactForm"
import Education from "./components/pages/Education"
import Project from "./components/pages/Project"
function App() {
  

  return (
    <div>
      
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Education/>
      <Project/>
      <ContactForm/>

    </div>
  )
}

export default App
