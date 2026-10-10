import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Typed from "typed.js";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import CursorImgEffect from "../components/CursorImgeffect";


gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Some = () => {
  const webRef = useRef(null);
  const developerRef = useRef(null);
  const typedRef = useRef(null);
  const homeRef = useRef(null);
  const imgRef = useRef();
  useEffect(() => {
    // ============================
    // TYPED JS
    // ============================

    const typed = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],

      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1400,
      startDelay: 500,

      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // ============================
    // GSAP
    // ============================

    const ctx = gsap.context(() => {
      // const tl = gsap.timeline()

      //   ScrollTrigger.create({
      //   trigger: homeRef.current,
      //   start: "top top",
      //   end: "+=1000",
      //   pin: true,
      //   scrub: true,
      // });
      gsap.set(imgRef.current, {
        scale: 0,
      });

      gsap.to(imgRef.current, {
        scale: 1,
        duration: 1.5,
        opacity: 1,
      });

      gsap.from(webRef.current, {
        yPercent: 120,
        duration: 1.5,
        ease: "expo.inOut",
      });

      gsap.from(developerRef.current, {
        yPercent: 120,
        duration: 2.5,
        ease: "expo.inOut",
      });

      gsap.from(".intro", {
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(".role-box", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(".red-circle", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(".arrow-svg", {
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center",
        duration: 1.5,
      });
    });

    return () => {
      typed.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <main id="home" className="home" ref={homeRef}>
     <CursorImgEffect targetRef={homeRef}/>
      
      {/* =====================================
          LEFT INTRO
      ===================================== */}

      <div className="intro">
        <div className="intro-line">
          <span></span>
        </div>

        <p>
          A dedicated full-stack developer
          <br />
          passionate about creating seamless
          <br />
          and powerful web applications.
        </p>
      </div>

      {/* SOCIAL LINK */}

      <div className="social-icon">
        <a href="https://github.com/iamsk18">
          {" "}
          <i class="ri-github-fill"></i>
        </a>

        <a href="https://www.linkedin.com/in/iamsk18">
          <i class="ri-linkedin-fill"></i>
        </a>

        <a href="https://www.instagram.com/snx_8een?igsh=MW81eXhtY2x0ajN3Nw==">
          {" "}
          <i class="ri-instagram-line"> </i>
        </a>
      </div>

      {/* ------
          RED CIRCLE
      ----------------*/}

      <div className="image-area">
        <div className="red-circle"></div>

        <div className="outer-circle"></div>

        <img
          ref={imgRef}
          className="front-image"
          src="/sk.png"
          alt="Shatrudhan Kumar"
        />
      </div>

      {/* ====================
          TYPEWRITER ============== */}

      <div className="developer-info">
        <span className="iam">I'm a</span>

        <h2 >
          <span ref={typedRef} className="auto-type"></span>
        </h2>

        <div className="developer-line"></div>

        <div className="developer-items">
          <span>Build</span>
          <i></i>
          <span>Learn</span>
          <i></i>
          <span>Create</span>
          <i></i>
          <span>Grow</span>
        </div>
      </div>

      {/* ===
          CURVED RED ARROW
                           ====*/}

      {/* CURVED RED ARROW */}

      {/* ROUND CURVED ARROW */}

      <div className="round-arrow">
        <svg
          className="arrow-svg"
          viewBox="0 0 140 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main curved arrow */}
          <path
            d="
        M 20 105
        C 22 82, 31 61, 47 50
        C 56 44, 66 43, 69 49
        C 72 55, 66 62, 61 62
        C 57 62, 58 56, 63 51
        C 72 42, 87 39, 99 29
        C 105 24, 111 18, 117 12
      "
            fill="none"
            stroke="#ff1717"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Arrow head */}
          <path
            d="
        M 101 11
        C 107 12, 113 12, 120 12
        C 117 17, 115 22, 113 27
      "
            fill="none"
            stroke="#ff1717"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 
          MAIN WEB DEVELOPER */}

      <section className="text-heading">
        {/* WEB */}

        <div className="heading-wrap web">
          <h1 ref={webRef}>WEB</h1>
        </div>

        {/* DEVELOPER */}

        <div className="heading-wrap developer">
          <h1 ref={developerRef}>
            <span className="outline">DEVE</span>

            <span className="filled">LOPER</span>
          </h1>
        </div>
      </section>

      {/* =====================================
          RIGHT SIDE
      ===================================== */}

      <div className="right-text">
        <span>BUILD</span>

        <i></i>

        <span>LEARN</span>

        <i></i>

        <span>GROW</span>

        <div className="vertical-line"></div>
      </div>

      {/* =====================================
          BOTTOM TAGLINE
      ===================================== */}

      <div className="tagline">
        <span></span>

        <p>Turning Ideas Into Real Web Products</p>
      </div>
    </main>
  );
};

export default Some;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Typed from "typed.js";
// import "./home1.css";

// const Home1 = () => {
//   const h1Ref = useRef([]);
//   const typingRef = useRef(null);

//   // Image refs
//   const imageAreaRef = useRef(null);
//   const backImageRef = useRef(null);
//   const revealRef = useRef(null);

//   useEffect(() => {
//     // ==============================
//     // TYPED JS
//     // ==============================

//     const typed = new Typed(typingRef.current, {
//       strings: [
//         "Full Stack Developer",
//         "MERN Stack Developer",
//         "Backend Developer",
//         "Frontend Developer",
//       ],

//       typeSpeed: 80,
//       backSpeed: 50,
//       backDelay: 1200,
//       startDelay: 300,

//       loop: true,
//       showCursor: true,
//       cursorChar: "|",
//     });

//     // ==============================
//     // GSAP HEADING
//     // ==============================

//     const ctx = gsap.context(() => {
//       gsap.from(h1Ref.current, {
//         yPercent: 220,
//         duration: 1.6,
//         ease: "expo.inOut",

//         stagger: {
//           each: 0.3,
//           from: "center",
//         },
//       });
//     });

//     // ==============================
//     // IMAGE MOUSE EFFECT
//     // ==============================

//     const imageArea = imageAreaRef.current;
//     const backImage = backImageRef.current;
//     const reveal = revealRef.current;

//     // GSAP quickTo = smoother mouse movement
//     const moveX = gsap.quickTo(backImage, "x", {
//       duration: 0.35,
//       ease: "power3.out",
//     });

//     const moveY = gsap.quickTo(backImage, "y", {
//       duration: 0.35,
//       ease: "power3.out",
//     });

//     const revealX = gsap.quickTo(reveal, "--mouse-x", {
//       duration: 0.25,
//       ease: "power3.out",
//     });

//     const revealY = gsap.quickTo(reveal, "--mouse-y", {
//       duration: 0.25,
//       ease: "power3.out",
//     });

//     const handleMouseMove = (e) => {
//       const rect = imageArea.getBoundingClientRect();

//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       // =====================================
//       // FACE POSITION
//       // =====================================

//       const faceX = rect.width * 0.50;
//       const faceY = rect.height * 0.28;

//       const distanceX = mouseX - faceX;
//       const distanceY = mouseY - faceY;

//       const distance = Math.sqrt(
//         distanceX * distanceX +
//         distanceY * distanceY
//       );

//       // =====================================
//       // FACE AREA
//       // =====================================

//       const faceRadius = 170;

//       if (distance < faceRadius) {

//         // Mouse movement
//         const offsetX = distanceX * -0.10;
//         const offsetY = distanceY * -0.10;

//         moveX(offsetX);
//         moveY(offsetY);

//         // Circular reveal position
//         revealX(`${mouseX}px`);
//         revealY(`${mouseY}px`);

//         gsap.to(reveal, {
//           opacity: 1,
//           "--radius": "125px",
//           duration: 0.4,
//           ease: "power3.out",
//         });

//       } else {

//         // Hide reveal
//         gsap.to(reveal, {
//           opacity: 0,
//           "--radius": "0px",
//           duration: 0.45,
//           ease: "power3.out",
//         });

//         moveX(0);
//         moveY(0);
//       }
//     };

//     const handleMouseLeave = () => {

//       gsap.to(reveal, {
//         opacity: 0,
//         "--radius": "0px",
//         duration: 0.5,
//         ease: "power3.out",
//       });

//       moveX(0);
//       moveY(0);
//     };

//     imageArea.addEventListener(
//       "mousemove",
//       handleMouseMove
//     );

//     imageArea.addEventListener(
//       "mouseleave",
//       handleMouseLeave
//     );

//     // ==============================
//     // CLEANUP
//     // ==============================

//     return () => {
//       typed.destroy();
//       ctx.revert();

//       imageArea.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );

//       imageArea.removeEventListener(
//         "mouseleave",
//         handleMouseLeave
//       );
//     };

//   }, []);

//   return (
//     <main id="home">

//       {/* =================================
//           NAVBAR
//       ================================= */}

//       <nav className="navbar">

//         <div className="logo">
//           SK<span>.</span>
//         </div>

//         <div className="nav-links">

//           <a className="active" href="#home">
//             Home
//           </a>

//           <a href="#about">
//             About
//           </a>

//           <a href="#skills">
//             Skill
//           </a>

//           <a href="#education">
//             Education
//           </a>

//           <a href="#projects">
//             Project
//           </a>

//           <a href="#contact">
//             Contact
//           </a>

//         </div>

//         <div className="theme">
//           ☀
//         </div>

//         <button className="talk-btn">
//           Let's Talk
//           <span>→</span>
//         </button>

//       </nav>

//       {/* =================================
//           INTRO
//       ================================= */}

//       <div className="intro">

//         <div className="intro-line">
//           <span></span>
//         </div>

//         <p>
//           A dedicated full-stack developer
//           <br />

//           passionate about creating seamless
//           <br />

//           and powerful web applications.
//         </p>

//       </div>

//       {/* =================================
//           HERO IMAGE AREA
//       ================================= */}

//       <div
//         className="image-area"
//         ref={imageAreaRef}
//       >

//         {/* RED CIRCLE */}

//         <div className="red-circle"></div>

//         {/* OUTER CIRCLE */}

//         <div className="outer-circle"></div>

//         {/* BACK IMAGE */}

//         <div
//           className="back-image"
//           ref={backImageRef}
//         >

//           <img
//             src="/img3.png"
//             alt=""
//           />

//         </div>

//         {/* FRONT IMAGE */}

//         <img
//           className="front-image"
//           src="/sk.png"
//           alt="Shatrudhan"
//         />

//         {/* MOUSE REVEAL */}

//         <div
//           className="image-reveal"
//           ref={revealRef}
//         >

//           <img
//             src="/sk-back.png"
//             alt=""
//           />

//         </div>

//       </div>

//       {/* =================================
//           AUTO TYPE
//       ================================= */}

//       <div className="developer-info">

//         <span className="iam">
//           I'm a
//         </span>

//         <h2>

//           <span
//             ref={typingRef}
//             className="auto-type"
//           ></span>

//         </h2>

//         <div className="developer-line"></div>

//         <div className="developer-items">

//           <span>Build</span>
//           <i></i>

//           <span>Learn</span>
//           <i></i>

//           <span>Create</span>
//           <i></i>

//           <span>Grow</span>

//         </div>

//       </div>

//       {/* =================================
//           MAIN HEADING
//       ================================= */}

//       <div className="text-heading">

//         <div className="heading-wrap web">

//           <h1
//             ref={(el) => {
//               h1Ref.current[0] = el;
//             }}
//           >
//             WEB
//           </h1>

//         </div>

//         <div className="heading-wrap developer">

//           <h1
//             ref={(el) => {
//               h1Ref.current[1] = el;
//             }}
//           >

//             <span className="outline">
//               DEVE
//             </span>

//             <span className="filled">
//               LOPER
//             </span>

//           </h1>

//         </div>

//       </div>

//       {/* =================================
//           CURVED ARROW
//       ================================= */}

//       <div className="round-arrow">

//         <svg
//           viewBox="0 0 160 150"
//           xmlns="http://www.w3.org/2000/svg"
//         >

//           <path
//             d="
//               M 20 125
//               C 17 101,
//                 22 77,
//                 39 62
//               C 52 50,
//                 72 48,
//                 87 42
//               C 101 36,
//                 111 27,
//                 128 18
//             "
//             fill="none"
//             stroke="#ff1717"
//             strokeWidth="3"
//             strokeLinecap="round"
//           />

//           <path
//             d="
//               M 112 17
//               L 130 18
//               L 123 34
//             "
//             fill="none"
//             stroke="#ff1717"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />

//         </svg>

//       </div>

//       {/* =================================
//           RIGHT SIDE
//       ================================= */}

//       <div className="right-text">

//         <span>BUILD</span>

//         <i></i>

//         <span>LEARN</span>

//         <i></i>

//         <span>GROW</span>

//       </div>

//       {/* =================================
//           TAGLINE
//       ================================= */}

//       <div className="tagline">

//         <span></span>

//         Turning Ideas Into Real Web Products

//       </div>

//     </main>
//   );
// };

// export default Home1;
