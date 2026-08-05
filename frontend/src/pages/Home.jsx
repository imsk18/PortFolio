import React, { useEffect, useRef } from 'react'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

import Typed from 'typed.js'
import '../styles/home.css';
import gsap from 'gsap';
import CursorImgEffect from '../components/CursorImgeffect';

const Home = ({theme}) => {
  const typingRef = useRef(null)
   const homeRef = useRef(null);
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


   const imgArr = [
        
    "/img8.jpeg",
    "/img9.jpeg",
    
    "/img11.jpeg",
    "/img12.jpg",
    "/img10.jpeg",
     ]


   const imgRef = useRef()
   gsap.registerPlugin(ScrollTrigger)



useGSAP(() => {
  const mm = gsap.matchMedia();

  // ================= DESKTOP =================
  mm.add("(min-width: 1024px)", () => {
    gsap.to(imgRef.current, {
      y: 680,
      x: -590,
      duration: 10,
      // scale: 0.5,
      
      width: "250px",
      borderRadius: "10px ",

      scrollTrigger: {
        trigger: imgRef.current,
        // markers: true,
        start: "top 10%",
        end: "top -55%",
        scrub: true,
        invalidateOnRefresh: true,

        onUpdate: (elem) => {
          const imgIndex = Math.min(
            imgArr.length - 1,
            Math.floor(elem.progress * imgArr.length)
          );

          imgRef.current.src = imgArr[imgIndex];
        },
      },
    });
  });

  // ================= TABLET =================
  mm.add("(min-width: 601px) and (max-width: 1023px)", () => {
    gsap.to(imgRef.current, {
      y: 450,
      x: -250,
      duration: 10,
      // scale: 0.6,
      width: "220px",
      borderRadius: "10px 25px",

      scrollTrigger: {
        trigger: imgRef.current,
        markers: false,
        start: "top 15%",
        end: "top -45%",
        scrub: true,
        invalidateOnRefresh: true,

        onUpdate: (elem) => {
          const imgIndex = Math.min(
            imgArr.length - 1,
            Math.floor(elem.progress * imgArr.length)
          );

          imgRef.current.src = imgArr[imgIndex];
        },
      },
    });
  });

  // ================= MOBILE =================
  mm.add("(max-width: 600px)", () => {
    gsap.to(imgRef.current, {
      y: 480,
      x: 0,
      duration: 10,
      // scale: 0.7,
      width: "200",
      height:"300",
      borderRadius: "10px ",

      scrollTrigger: {
        trigger: imgRef.current,
        markers: false,
        start: "top 20%",
        end: "top -40%",
        scrub: true,
        invalidateOnRefresh: true,

        onUpdate: (elem) => {
          const imgIndex = Math.min(
            imgArr.length - 1,
            Math.floor(elem.progress * imgArr.length)
          );

          imgRef.current.src = imgArr[imgIndex];
        },
      },
    });
  });

  return () => mm.revert();
});

  return (
    <div id='home' ref={homeRef}  style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "300px",
        padding: "20px",
      }} >
      <CursorImgEffect targetRef={homeRef}/>
      {/* <CursorImgEffect/> */}
      <div className="left">
       <h1>Hii </h1>
       <h1>I'm <span style={{color:"#E8C766"}}>Shatrudhan</span></h1>
       <h2>I'm a <span ref={typingRef}     className='auto-type'></span></h2>
       {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias explicabo provident consequatur accusantium voluptatem quisquam nobis reiciendis nulla saepe debitis!</p> */}
       <div className="btn">
  
  <button><a href="#contact">Get in touch</a></button>
  <button><a href="#about">About Me</a></button>
 </div>


       <div className="social-icon">
        <i class="ri-github-fill"></i>
        <i class="ri-linkedin-fill"></i>
        <a href="https://www.instagram.com/snx_8een?igsh=MW81eXhtY2x0ajN3Nw=="> <i class="ri-instagram-line"> </i></a>
        
        <i class="ri-telegram-fill"></i>
 </div>
 
      
      </div>


      <div className="right">
        <img ref={imgRef} src="/dp.jpeg" alt="" />
      </div>


    </div>
  )
}

export default Home