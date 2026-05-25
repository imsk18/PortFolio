import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const CurveCardPage = () => {
  const mainRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length || !mainRef.current) return;

    gsap.set(cards, {
      x: 0,
      y: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        {
          motionPath: {
            path: "#curve",
            align: "#curve",
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
          ease: "none",
          duration: 1,
        },
        i * 0.3
      );
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  const setCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <>
      <section id="f"></section>
      <section className="main" ref={mainRef}>
        <svg width="100vw" height="100%" viewBox="0 0 1000 500">
          <path id="curve" d="M100,400 Q500,100 900,400" fill="none" stroke="black" />
        </svg>

        <div className="cards">
          {cardNumbers.map((number) => (
            <div key={number} className="card" ref={setCardRef}>
              {number}
            </div>
          ))}
        </div>
      </section>
      <section id="t"></section>

      <style>{`
        body {
          margin: 0;
          height: 300vh;
        }

        .main {
          height: 100vh;
          position: relative;
          background: #ddd;
          overflow: hidden;
        }

        .cards {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        svg {
          width: 100vw;
          height: 100%;
        }

        .card {
          width: 100px;
          height: 120px;
          background: rgb(160, 92, 224);
          color: white;
          position: absolute;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #f,
        #t {
          height: 100vh;
          width: 100%;
          background-color: #270f0f;
        }

        #t {
          background-color: #4a1919;
        }
      `}</style>
    </>
  );
};

export default CurveCardPage;
