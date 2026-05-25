import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';
const Sk = () => {

    const sRef = useRef(null)
    const p1Ref = useRef(null)
    const p2Ref = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const tl = gsap.timeline({
        
      scrollTrigger: {
        trigger: sRef.current,
        markers: true,
        start: "top 30%",
        end: "top -55%",
        scrub: true,
        pin:true,
        anticipatePin:true
      }

    })

    tl.to(p1Ref.current,{
        x:-400
    })
    tl.to(p2Ref.current,{
        x:400
    },"<")


  },[])

    
  return (
    <div ref={sRef} id='sk'>
        <div ref={p1Ref} className="p1"></div>
        <div ref={p2Ref} className="p2"></div>
    </div>
  )
}

export default Sk