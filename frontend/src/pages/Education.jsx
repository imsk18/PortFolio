import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/education.css';
import CursorImgEffect from '../components/CursorImgeffect';

gsap.registerPlugin(ScrollTrigger)

const Education = ({theme}) => {
  const sectionRef = useRef(null)
  const universityRef = useRef(null)
  const schoolRef = useRef(null)
   const EduRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const university = universityRef.current
    const school = schoolRef.current

    gsap.fromTo(university, { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'top center',
        scrub: 1.5,
        markers: false,
      },
    })

    gsap.fromTo(school, { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'top center',
        scrub: 1.5,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    
    <div id='Education' ref={sectionRef} style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "300px",
        padding: "20px",
      }}  >
        {/* <CursorImgEffect targetRef={EduRef}/> */}
      <h1 className='heading'><i class="ri-graduation-cap-fill"></i> MY EDUCATION</h1>
        <div className="university" ref={universityRef}>
            <div className="u-img"><img src="u.jpg" alt="" /></div>
            <div className="u-info">
              
              <h2>Becholer of Computer Application-BCA</h2>
             <h3>Maharishi Markandeshwar (Deeemed to Universiy)</h3>
              <h3>2024-2027|<span>pursuing</span></h3>
            </div>

        </div>


        <div className="school" ref={schoolRef}>
            <div className="s-img"><img src="b.jpg" alt="" /></div>
            <div className="s-info">
              <h2>Arts</h2>
              <h3>B L s S P HIGH SCHOOL NARKATIA</h3>
              <h3>2022-2024|<span>completed</span></h3>
            </div>

        </div>
    </div>
  )
}

export default Education