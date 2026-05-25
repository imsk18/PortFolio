// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// const projectCards = [
//   { title: 'Portfolio App', img: '/skill-icons/React.svg', action: 'View Project', github:'git' },
//   { title: 'Landing Page', img: '/skill-icons/HTML5.svg', action: 'View Project' },
//   { title: 'Dashboard UI', img: '/skill-icons/CSS3.svg', action: 'View Project' },
//   { title: 'Node API', img: '/skill-icons/Node.js.svg', action: 'View Project' },
//   { title: 'MongoDB Admin', img: '/skill-icons/MongoDB.svg', action: 'View Project' },
//   { title: 'Express Service', img: '/skill-icons/Express.svg', action: 'View Project' },
//   { title: 'GSAP Demo', img: '/skill-icons/gsap.svg', action: 'View Project' },
//   { title: 'Vite Starter', img: '/vite.svg', action: 'View Project' },
// ];

// const Project = () => {
//   const mainRef = useRef(null);
//   const cardsRef = useRef([]);

//   const handleProjectClick = (title) => {
//     console.log(`${title} button clicked`);
//   };

//   useEffect(() => {
//     const cards = cardsRef.current.filter(Boolean);
//     if (!cards.length || !mainRef.current) return;

//     gsap.set(cards, {
//       x: 0,
//       y: 0,
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainRef.current,
//         start: "top top",
//         end: "+=3000",
//         scrub: true,
//         pin: true,
//       },
//     });

//     cards.forEach((card, i) => {
//       tl.to(
//         card,
//         {
//           motionPath: {
//             path: "#curve",
//             align: "#curve",
//             alignOrigin: [0.5, 0.5],
//             start: 0,
//             end: 1,
//           },
//           ease: "none",
//           duration: 1,
//         },
//         i * 0.3
//       );
//     });

//     return () => {
//       if (tl.scrollTrigger) tl.scrollTrigger.kill();
//       tl.kill();
//       ScrollTrigger.clearMatchMedia();
//     };
//   }, []);

//   const setCardRef = (el) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   return (
//     <>
    
//       <section className="main" ref={mainRef}>
//         <h1 style={{ textAlign: 'center', margin: 0, paddingTop: '1rem' }}>PROJECTS</h1>
//         <svg width="100vw" height="100%" viewBox="0 0 1000 500">
//           <path id="curve" d="M100,400 Q500,100 900,400" fill="none" stroke="black" />
//         </svg>

//         <div className="cards">
//           {projectCards.map((card) => (
//             <div key={card.title} className="card" ref={setCardRef}>
//               <div className="card-media">
//                 <img src={card.img} alt={card.title} />
//               </div>
//               <div className="card-info">
//                 <h3>{card.title}</h3>
//                 <button type="button" onClick={() => handleProjectClick(card.title)}>
//                   {card.action}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
      

//       <style>{`
//         body {
//           margin: 0;
//           height: 300vh;
//         }

//         .main {
//           height: 100vh;
//           position: relative;
//           background: #ddd;
//           overflow: hidden;
//         }

//         .cards {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//         }

//         svg {
//           width: 100vw;
//           height: 100%;
//         }

//         .card {
//           width: 190px;
//           height: 260px;
//           background: rgba(20, 25, 60, 0.96);
//           color: #fff;
//           position: absolute;
//           border-radius: 24px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           padding: 1rem;
//           box-shadow: 0 24px 50px rgba(0, 0, 0, 0.25);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//         }

//         .card-media {
//           display: grid;
//           place-items: center;
//           padding: 0.6rem;
//           border-radius: 18px;
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .card-media img {
//           width: 80px;
//           height: auto;
//           max-height: 80px;
//         }

//         .card-info {
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }

//         .card-info h3 {
//           margin: 0;
//           font-size: 1rem;
//           line-height: 1.3;
//         }

//         .card-info button {
//           border: none;
//           border-radius: 999px;
//           padding: 0.85rem 1rem;
//           background: #ffffff;
//           color: #111;
//           font-weight: 700;
//           cursor: pointer;
//           transition: transform 0.2s ease, background-color 0.2s ease;
//         }

//         .card-info button:hover {
//           transform: translateY(-2px);
//           background: #f0f4ff;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Project;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(
//   ScrollTrigger,
//   MotionPathPlugin
// );

// const projectCards = [
//   {
//     title: "Portfolio App",
//     img: "/skill-icons/React.svg",
//     action: "View Project",
//   },

//   {
//     title: "Landing Page",
//     img: "/skill-icons/HTML5.svg",
//     action: "View Project",
//   },

//   {
//     title: "Dashboard UI",
//     img: "/skill-icons/CSS3.svg",
//     action: "View Project",
//   },

//   {
//     title: "Node API",
//     img: "/skill-icons/Node.js.svg",
//     action: "View Project",
//   },

//   {
//     title: "MongoDB Admin",
//     img: "/skill-icons/MongoDB.svg",
//     action: "View Project",
//   },

//   {
//     title: "Express Service",
//     img: "/skill-icons/Express.svg",
//     action: "View Project",
//   },

//   {
//     title: "GSAP Demo",
//     img: "/skill-icons/gsap.svg",
//     action: "View Project",
//   },

//   {
//     title: "Vite Starter",
//     img: "/vite.svg",
//     action: "View Project",
//   },
// ];

// const Project = () => {

//   const mainRef = useRef(null);

//   const cardsRef = useRef([]);

//   const handleProjectClick = (title) => {

//     console.log(`${title} clicked`);
//   };

//   useEffect(() => {

//     const cards =
//       cardsRef.current.filter(Boolean);

//     if (!cards.length || !mainRef.current)
//       return;

//     /* =========================
//        MOBILE ANIMATION
//     ========================= */

//     if (window.innerWidth <= 768) {

//       cards.forEach((card, i) => {

//         gsap.set(card, {

//           y: window.innerHeight + 300,

//           opacity: 0,

//           scale: 0.8,
//         });

//         gsap.to(card, {

//           y: -window.innerHeight - 400,

//           opacity: 1,

//           scale: 1,

//           duration: 8,

//           delay: i * 1.5,

//           repeat: -1,

//           ease: "none",
//         });
//       });

//       return;
//     }

//     /* =========================
//        DESKTOP GSAP CURVE
//     ========================= */

//     gsap.set(cards, {
//       x: 0,
//       y: 0,
//     });

//     const tl = gsap.timeline({

//       scrollTrigger: {

//         trigger: mainRef.current,

//         start: "top top",

//         end: "+=3000",

//         scrub: true,

//         pin: true,
//       },
//     });

//     cards.forEach((card, i) => {

//       tl.to(
//         card,
//         {

//           motionPath: {

//             path: "#curve",

//             align: "#curve",

//             alignOrigin: [0.5, 0.5],

//             start: 0,

//             end: 1,
//           },

//           ease: "none",

//           duration: 1,
//         },

//         i * 0.3
//       );
//     });

//     return () => {

//       if (tl.scrollTrigger)
//         tl.scrollTrigger.kill();

//       tl.kill();
//     };

//   }, []);

//   const setCardRef = (el) => {

//     if (
//       el &&
//       !cardsRef.current.includes(el)
//     ) {
//       cardsRef.current.push(el);
//     }
//   };

//   return (
//     <>
    
//       <section
//         className="main"
//         ref={mainRef}
//       >

//         <h1>
//           PROJECTS
//         </h1>

//         {/* DESKTOP SVG */}

//         <svg
//           width="100vw"
//           height="100%"
//           viewBox="0 0 1000 500"
//         >

//           <path
//             id="curve"
//             d="M100,400 Q500,100 900,400"
//             fill="none"
//             stroke="transparent"
//           />

//         </svg>

//         {/* CARDS */}

//         <div className="cards">

//           {projectCards.map((card) => (

//             <div
//               key={card.title}
//               className="card"
//               ref={setCardRef}
//             >

//               <div className="card-media">

//                 <img
//                   src={card.img}
//                   alt={card.title}
//                 />

//               </div>

//               <div className="card-info">

//                 <h3>
//                   {card.title}
//                 </h3>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     handleProjectClick(card.title)
//                   }
//                 >
//                   {card.action}
//                 </button>

//               </div>

//             </div>
//           ))}

//         </div>

//       </section>

//       <style>{`

//         body{
//           margin:0;
//           overflow-x:hidden;
//           background:#0f172a;
//         }

//         .main{

//           min-height:100vh;

//           position:relative;

//           overflow:hidden;

//           background:
//           radial-gradient(
//             circle at top,
//             #1e293b,
//             #0f172a 70%
//           );
//         }

//         // h1{

//         //   position:relative;

//         //   z-index:5;

//         //   text-align:center;

//         //   color:white;

//         //   font-size:clamp(2rem,5vw,5rem);

//         //   font-weight:900;

//         //   letter-spacing:4px;

//         //   padding-top:1rem;

//         //   margin:0;
//         // }

//         svg{

//           width:100vw;

//           height:100%;

//           position:absolute;

//           inset:0;
//         }

//         .cards{

//           position:absolute;

//           width:100%;

//           height:100%;
//         }

//         .card{

//           width:210px;

//           height:280px;

//           background:
//           rgba(20,25,60,0.96);

//           color:white;

//           position:absolute;

//           border-radius:28px;

//           display:flex;

//           flex-direction:column;

//           justify-content:space-between;

//           padding:1rem;

//           box-shadow:
//           0 24px 50px rgba(0,0,0,0.25);

//           border:
//           1px solid rgba(255,255,255,0.08);

//           backdrop-filter:blur(10px);
//         }

//         .card-media{

//           display:grid;

//           place-items:center;

//           padding:1rem;

//           border-radius:20px;

//           background:
//           rgba(255,255,255,0.05);

//           height:65%;
//         }

//         .card-media img{

//           width:85px;

//           max-height:85px;

//           object-fit:contain;
//         }

//         .card-info{

//           display:flex;

//           flex-direction:column;

//           gap:0.8rem;
//         }

//         .card-info h3{

//           margin:0;

//           font-size:1rem;
//         }

//         .card-info button{

//           border:none;

//           border-radius:999px;

//           padding:0.8rem 1rem;

//           background:white;

//           color:#111;

//           font-weight:700;

//           cursor:pointer;
//         }

//         /* =========================
//            MOBILE
//         ========================= */

//         @media (max-width:768px){

//           .main{

//             height:100vh;
//           }

//           svg{
//             display:none;
//           }

//           .cards{

//             position:relative;

//             width:100%;

//             height:100vh;

//             overflow:hidden;
//           }

//           .card{

//             left:50%;

//             transform:
//             translateX(-50%);

//             width:88%;

//             max-width:320px;

//             height:230px;
//           }

//           .card-media{

//             height:60%;
//           }

//           .card-media img{

//             width:65px;
//           }
//         }

//       `}</style>
//     </>
//   );
// };

// export default Project;
















import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin
);

const projectCards = [
  {
    title: "Portfolio App",
    img: "/skill-icons/React.svg",
    action: "View Project",
  },

  {
    title: "Landing Page",
    img: "/skill-icons/HTML5.svg",
    action: "View Project",
  },

  {
    title: "Dashboard UI",
    img: "/skill-icons/CSS3.svg",
    action: "View Project",
  },

  {
    title: "Node API",
    img: "/skill-icons/Node.js.svg",
    action: "View Project",
  },

  {
    title: "MongoDB Admin",
    img: "/skill-icons/MongoDB.svg",
    action: "View Project",
  },

  {
    title: "Express Service",
    img: "/skill-icons/Express.svg",
    action: "View Project",
  },

  {
    title: "GSAP Demo",
    img: "/skill-icons/gsap.svg",
    action: "View Project",
  },

  {
    title: "Vite Starter",
    img: "/vite.svg",
    action: "View Project",
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
        className="main"
        ref={mainRef}
      >

        <h1>
          PROJECTS
        </h1>

        {/* DESKTOP CURVE */}

        <svg
          width="100vw"
          height="100%"
          viewBox="0 0 1000 500"
        >

          <path
            id="curve"
            d="M100,400 Q500,100 900,400"
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

                <h3>
                  {card.title}
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    handleProjectClick(card.title)
                  }
                >
                  {card.action}
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          margin:0;
          overflow-x:hidden;
          background:#0f172a;
          font-family:Inter,sans-serif;
        }

        .main{

          min-height:100vh;

          position:relative;

          overflow:hidden;

          // background:
          // radial-gradient(
          //   circle at top,
          //   #1e293b,
          //   #0f172a 70%
          // );
          background:#ffff
        }

        // h1{

        //   position:relative;

        //   z-index:5;

        //   text-align:center;

        //   color:white;

        //   font-size:clamp(2rem,5vw,5rem);

        //   font-weight:900;

        //   letter-spacing:4px;

        //   padding-top:1rem;

        //   margin:0;
        // }

        /* DESKTOP SVG */

        svg{

          width:100vw;

          height:100%;

          position:absolute;

          inset:0;
        }

        /* CARDS */

        .cards{

          position:absolute;

          width:100%;

          height:100%;
        }

        /* CARD */

        .card{

          width:210px;

          height:280px;

          background:
          rgba(20,25,60,0.96);

          color:white;

          position:absolute;

          border-radius:28px;

          display:flex;

          flex-direction:column;

          justify-content:space-between;

          padding:1rem;

          box-shadow:
          0 24px 50px rgba(0,0,0,0.25);

          border:
          1px solid rgba(255,255,255,0.08);

          backdrop-filter:blur(10px);
        }

        .card-media{

          display:grid;

          place-items:center;

          padding:1rem;

          border-radius:20px;

          background:
          rgba(255,255,255,0.05);

          height:65%;
        }

        .card-media img{

          width:85px;

          max-height:85px;

          object-fit:contain;
        }

        .card-info{

          display:flex;

          flex-direction:column;

          gap:0.8rem;
        }

        .card-info h3{

          margin:0;

          font-size:1rem;
        }

        .card-info button{

          border:none;

          border-radius:999px;

          padding:0.8rem 1rem;

          background:white;

          color:#111;

          font-weight:700;

          cursor:pointer;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width:768px){

          .main{

            height:100vh;
          }

          svg{
            display:none;
          }

          .cards{

            position:relative;

            width:100%;

            height:100%;
          }

          .card{

            width:88%;

            max-width:320px;

            height:230px;

            border-radius:24px;
          }

          .card-media{

            height:60%;
          }

          .card-media img{

            width:65px;
          }
        }

      `}</style>
    </>
  );
};

export default Project;