// import React, { useEffect, useEffectEvent, useRef } from 'react'
// import '../styles/section.css';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// const Section = () => {
// const pageRef = useRef()
// const c = useRef()
// const c1 = useRef()
// gsap.registerPlugin(ScrollTrigger)



//    useEffect(() => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: pageRef.current,
//       markers: true,
//       pin: true,
//       start: "top top",
//       end: "+=500",
//       scrub: true
//     }
//   });

//   // ✅ dono ek saath
//   tl.to(c.current, {
//     y: -500
//   }, 0);

//   tl.to(c1.current, {
//     y: -500
//   }, 0.3);



// },[])




//   return (
//     <div ref={pageRef} id='s'>
//         <div ref={c} className="card"></div>
//         <div ref={c1} className="card2"></div>
//     </div>
//   )
// }

// export default Section