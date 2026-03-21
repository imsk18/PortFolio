import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Home = () => {
  const typingRef = useRef(null)
  useEffect(()=>{
    const typed = new Typed(typingRef.current,{strings: ["Full stack developer","MERN stack developer","Backend developer","Frontend developer"],
      typeSpeed:150,
      backSpeed:50,
      loop:true

    })
    return ()=>{
      typed.destroy()
    }

  },[])

  return (
    <div id='home'>
      <div className="left">
       <h1>Hii </h1>
       <h1>i'm Shatrudhan</h1>
       <h2>i'm a <span ref={typingRef}     className='auto-type'></span></h2>
       {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo provident consequatur accusantium voluptatem quisquam nobis reiciendis nulla saepe debitis!</p> */}
       <div className="social-icon">
        <i class="ri-github-fill"></i>
        <i class="ri-linkedin-fill"></i>
        <a href="https://www.instagram.com/snx_8een?igsh=MW81eXhtY2x0ajN3Nw=="> <i class="ri-instagram-line"> </i></a>
        
        <i class="ri-telegram-fill"></i>
 </div>
 <div className="btn">
  <button>get cv</button>
  <button>get in touch</button>
 </div>
      
      </div>


      <div className="right">
        <img src="./public/s.jpg" alt="" />
      </div>


    </div>
  )
}

export default Home