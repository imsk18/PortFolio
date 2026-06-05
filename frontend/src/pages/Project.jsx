
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import '../styles/project.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin
);

const projectCards = [
  {
    title: "Portfolio Website",
    img: "/s.jpg",
    desc: "Modern responsive portfolio website.",
    tech: ["React", "GSAP", "Node.js"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/portfolio",
  },

  {
    title: "E-Commerce Website",
    img: "/u.jpg",
    desc: "Full stack shopping website.",
    tech: ["React", "Express", "MongoDB"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Portfolio Website",
    img: "/s.jpg",
    desc: "Modern responsive portfolio website.",
    tech: ["React", "GSAP", "Node.js"],
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/portfolio",
  },

  {
    title: "E-Commerce Website",
    img: "/project-img/img1.png",
    desc: "Full stack shopping website.",
    tech: ["React", "Express", "MongoDB"],
    live: "https://luxestore-1-or2j.onrender.com/",
    github: "https://github.com/yourusername/ecommerce",
  },
];

const Project = () => {

  const mainRef = useRef(null);

  const cardsRef = useRef([]);

  const handleProjectClick = (title) => {

    console.log(`${title} clicked`);
  };

  useEffect(() => {

    const cards =
      cardsRef.current.filter(Boolean);

    if (!cards.length || !mainRef.current)
      return;

    /* =========================
       MOBILE STACK SCROLL
    ========================= */

    if (window.innerWidth <= 768) {

      gsap.set(cards, {
        position: "absolute",
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        y: window.innerHeight,
        scale: 1,
      });

      const mobileTl = gsap.timeline({

        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `+=${cards.length * 600}`,
          scrub: 1,
          pin: true,
        },
      });

      cards.forEach((card, i) => {

        /* CURRENT CARD ENTER */

        mobileTl.to(
          card,
          {
            y: 0,
            duration: 1,
            ease: "power3.out",
          },

          i
        );

        /* OLD CARD MOVE LITTLE UP */

        if (i > 0) {

          mobileTl.to(
            cards[i - 1],
            {

              y: -60,
              scale: 0.92,
              opacity: 0.65,
              duration: 1,
            },

            i
          );
        }
      });

      return () => {

        if (mobileTl.scrollTrigger) {

          mobileTl.scrollTrigger.kill();
        }

        mobileTl.kill();
      };
    }

    /* =========================
       DESKTOP CURVE
    ========================= */

    gsap.set(cards, {
      x: 0,
      y: 0,
    });

    const desktopTl = gsap.timeline({

      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
    });

    cards.forEach((card, i) => {

      desktopTl.to(
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

      if (desktopTl.scrollTrigger) {

        desktopTl.scrollTrigger.kill();
      }

      desktopTl.kill();
    };

  }, []);

  const setCardRef = (el) => {

    if (
      el &&
      !cardsRef.current.includes(el)
    ) {
      cardsRef.current.push(el);
    }
  };

  return (
    <>
    
      <section
        id="project"
        ref={mainRef}
      >


        <div className="p-heading">
          <img className="heading-img" src="/pro.png" alt="" />
          <h1>  PROJECTS</h1>
         
        </div>

        
         

        {/* DESKTOP CURVE */}

        <svg
          width="100vw"
          height="100%"
          viewBox="0 0 1000 500"
        >

          <path
            id="curve"
            // d="M100,400 Q500,100 900,400"
            d="M100,350 Q500,50 900,350"
            fill="none"
            stroke="transparent"
          />

        </svg>

        
{/* CARDS */}

<div className="cards">

  {projectCards.map((card) => (

    <div
      key={card.title}
      className="card"
      ref={setCardRef}
    >

      <div className="card-media">
        <img
          src={card.img}
          alt={card.title}
        />
      </div>

      <div className="card-info">

        <h3>{card.title}</h3>

        <p className="card-desc">
          {card.desc}
        </p>

        <div className="tech-stack">
          {card.tech.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="card-buttons">

          <button
            className="live-btn"
            onClick={() =>
              window.open(card.live, "_blank")
            }
          >
            Live Preview
          </button>

          <button
            className="github-btn"
            onClick={() =>
              window.open(card.github, "_blank")
            }
          >
            GitHub
          </button>

        </div>

      </div>

    </div>

  ))}

</div>

      </section>

    
    </>
  );
};

export default Project;