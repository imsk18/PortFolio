import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Typed from "typed.js";
import "../styles/Home.css";
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
      <CursorImgEffect targetRef={homeRef} />

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

      <div className="img-cover"></div>

      {/* ====================
          TYPEWRITER ============== */}

      <div className="developer-info">
        <span className="iam">I'm a</span>

        <h2>
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
