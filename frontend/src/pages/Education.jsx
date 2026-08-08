import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rnd } from "react-rnd";
import "../styles/education.css";
gsap.registerPlugin(ScrollTrigger);
const TOUR_URL = "https://www.mmumullana.org/360_view/";
const Education = ({ theme }) => {
  const sectionRef = useRef(null);
  const universityRef = useRef(null);
  const schoolRef = useRef(null);
  const [show360, setShow360] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [windowSize, setWindowSize] = useState({
    width: 900,
    height: 600,
  });
  const [windowPosition, setWindowPosition] = useState({
    x: 0,
    y: 0,
  });
  /* ==========================================
     RESPONSIVE CHECK
  ========================================== */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  /* ==========================================
     EDUCATION ANIMATION
  ========================================== */
  useEffect(() => {
    const section = sectionRef.current;
    const university = universityRef.current;
    const school = schoolRef.current;
    if (!section || !university || !school) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        university,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "top center",
            scrub: 1.5,
            markers: false,
          },
        },
      );
      gsap.fromTo(
        school,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "top center",
            scrub: 1.5,
            markers: false,
          },
        },
      );
    }, section);
    return () => {
      ctx.revert();
    };
  }, []);
  /* ==========================================
     CALCULATE WINDOW
  ========================================== */
  const getWindowData = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let width;
    let height;
    let x;
    let y;
    if (vw <= 600) {
      width = vw - 20;
      height = vh - 70;
      x = 10;
      y = 35;
    } else {
      width = Math.min(900, vw - 60);
      height = Math.min(600, vh - 80);
      x = (vw - width) / 2;
      y = (vh - height) / 2;
    }
    return {
      width,
      height,
      x,
      y,
    };
  };
  /* ==========================================
     OPEN 360
  ========================================== */
  const open360 = () => {
    const data = getWindowData();
    setWindowSize({
      width: data.width,
      height: data.height,
    });
    setWindowPosition({
      x: data.x,
      y: data.y,
    });
    setShow360(true);
  };
  /* ==========================================
     CLOSE 360
  ========================================== */
  const close360 = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setShow360(false);
  };
  /* ==========================================
     WINDOW RESIZE
  ========================================== */
  useEffect(() => {
    if (!show360) return;
    const handleWindowResize = () => {
      const data = getWindowData();
      if (window.innerWidth <= 600) {
        setWindowSize({
          width: data.width,
          height: data.height,
        });
        setWindowPosition({
          x: data.x,
          y: data.y,
        });
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [show360]);
  return (
    <section
      id="Education"
      ref={sectionRef}
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      {/* ========================================
          HEADING
      ======================================== */}
      <h1 className="heading">
        <i className="ri-graduation-cap-fill"></i>
        MY EDUCATION
      </h1>
      {/* ========================================
          UNIVERSITY
      ======================================== */}
      <div className="university" ref={universityRef}>
        <div className="u-img">
          <img src="/u.jpg" alt="Maharishi Markandeshwar University" />
        </div>
        <div className="u-info">
          <h2>Bachelor of Computer Application-BCA</h2>
          <h3>Maharishi Markandeshwar (Deemed to be) University</h3>
          <h3>
            2024-2027 |<span> pursuing</span>
          </h3>
          <button type="button" className="view-360" onClick={open360}>
            View 360° →
          </button>
        </div>
      </div>
      {/* ========================================
          SCHOOL
      ======================================== */}
      <div className="school" ref={schoolRef}>
        <div className="s-img">
          <img src="/b.jpg" alt="B L S S P High School" />
        </div>
        <div className="s-info">
          <h2>Arts</h2>
          <h3>B L S S P HIGH SCHOOL NARKATIA</h3>
          <h3>
            2022-2024 |<span> completed</span>
          </h3>
        </div>
      </div>
      {/* ========================================
          360 VIEW
      ======================================== */}
      {show360 &&
        createPortal(
          <div className="tour-overlay">
            {/* ==================================
                MOBILE
            ================================== */}
            {isMobile ? (
              <div className="tour-mobile">
                <div className="tour-bar">
                  <div className="tour-title">
                    <span className="tour-dot"></span>
                    <span>University 360° View</span>
                  </div>
                  <button
                    type="button"
                    className="tour-close"
                    onPointerDown={close360}
                    onClick={close360}
                    aria-label="Close 360 view"
                  >
                    ×
                  </button>
                </div>
                <div className="tour-content">
                  <iframe
                    src={TOUR_URL}
                    title="University 360 Degree View"
                    allow="
                      fullscreen;
                      autoplay;
                      gyroscope;
                      accelerometer
                    "
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              /* ==================================
                  DESKTOP
              ================================== */
              <Rnd
                size={windowSize}
                position={windowPosition}
                minWidth={300}
                minHeight={250}
                bounds="window"
                dragHandleClassName="tour-bar"
                enableResizing={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true,
                  topRight: true,
                  bottomRight: true,
                  bottomLeft: true,
                  topLeft: true,
                }}
                onDragStop={(event, data) => {
                  setWindowPosition({
                    x: data.x,
                    y: data.y,
                  });
                }}
                onResizeStop={(event, direction, ref, delta, position) => {
                  setWindowSize({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight,
                  });
                  setWindowPosition({
                    x: position.x,
                    y: position.y,
                  });
                }}
                className="tour-window"
              >
                <div className="tour-bar">
                  <div className="tour-title">
                    <span className="tour-dot"></span>
                    <span>University 360° View</span>
                  </div>
                </div>
                <div className="tour-content">
                  <iframe
                    src={TOUR_URL}
                    title="University 360 Degree View"
                    allow="
                      fullscreen;
                      autoplay;
                      gyroscope;
                      accelerometer
                    "
                    allowFullScreen
                  />
                </div>
              </Rnd>
            )}
            {/* ==================================
                DESKTOP CLOSE
            ================================== */}
            {!isMobile && (
              <button
                type="button"
                className="desktop-tour-close"
                style={{
                  left: windowPosition.x + windowSize.width - 48,
                  top: windowPosition.y + 2,
                }}
                onPointerDown={close360}
                onClick={close360}
                aria-label="Close 360 view"
              >
                ×
              </button>
            )}
          </div>,
          document.body,
        )}
    </section>
  );
};
export default Education;