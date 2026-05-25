import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skill from "./pages/Skill"
import ContactForm from "./pages/ContactForm"
import Education from "./pages/Education"
import Project from "./pages/Project"
import Footer from "./pages/Footer"
// import Img from "./pages/img"
// import Sk from "./pages/Sk"


function App() {
  

  return (
    <div>
      
      <Navbar/>
      <Home/>
      <About/>
     {/* <Sk/> */}
      <Skill/>
      <Education/>
      <Project/>
      <ContactForm/>
      {/* <Img/> */}
      <Footer/>

    </div>
  )
}

export default App
