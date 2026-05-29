// import { useEffect } from 'react';
// import gsap from 'gsap';
// import '../styles/ScrollingLine.css';

// const items = Array.from({ length: 6 }, (_, index) => index + 1);
// const imageUrl = 'https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg';

// function ScrollingLine() {
//   useEffect(() => {
//     const wheelHandler = (event) => {
//       if (event.deltaY > 0) {
//         gsap.to('.marquee', {
//           transform: 'translateX(-200%)',
//           repeat: -1,
//           duration: 4,
//           ease: 'linear'
//         });

//         gsap.to('.marquee1', {
//           transform: 'translateX(-200%)',
//           repeat: -1,
//           duration: 4,
//           ease: 'linear'
//         });

//         gsap.to('.Arrow, .marquee1 img', {
//           rotate: 180
//         });
//       } else {
//         gsap.to('.marquee', {
//           transform: 'translateX(0%)',
//           repeat: -1,
//           duration: 4,
//           ease: 'linear'
//         });

//         gsap.to('.marquee1', {
//           transform: 'translateX(0%)',
//           repeat: -1,
//           duration: 4,
//           ease: 'linear'
//         });

//         gsap.to('.marquee img, .marquee1 img', {
//           rotate: 0
//         });
//       }
//     };

//     window.addEventListener('wheel', wheelHandler);
//     return () => {
//       window.removeEventListener('wheel', wheelHandler);
//     };
//   }, []);

//   return (
//     <div className="scrolling-line">
     
//         <div className="move">
//           {items.map((item) => (
//             <div className="marquee" key={`marquee-${item}`}>
              
//               <h1>welcome my website</h1>
//               <img className='Arrow' src={imageUrl} alt="arrow" />
//               <small>mernstack</small>
//               <img src="../public/skill-icons/React.svg" alt="" />
//                <img src="../public/skill-icons/javaScript.svg" alt="" />
//                <img src="../public/skill-icons/express.svg" alt="" />
//                 <img src="../public/skill-icons/MongoDb.svg" alt="" />
//             </div>
//           ))}
//         </div>

//         {/* <div className="move1">
//           {items.map((item) => (
//             <div className="marquee1" key={`marquee1-${item}`}>
//               <h1>welcome my website</h1>
//               <img src={imageUrl} alt="arrow" />
//             </div>
//           ))}
//         </div> */}
//       </div>
    
//   );
// }

// export default ScrollingLine;

import { useEffect } from "react";
import gsap from "gsap";
import "../styles/ScrollingLine.css";

const items = Array.from({ length: 6 }, (_, index) => index + 1);

const imageUrl =
  "https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg";

function ScrollingLine() {
  useEffect(() => {
    let lastScrollTop = 0;

    const scrollHandler = () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // scrolling down
      if (currentScroll > lastScrollTop) {
        gsap.to(".marquee", {
          x: "-200%",
          repeat: -1,
          duration: 6,
          ease: "linear",
        });

        gsap.to(".Arrow, .marquee1 img", {
          rotate: 180,
          duration: 0.3,
        });
      }

      // scrolling up
      else {
        gsap.to(".marquee", {
          x: "0%",
          repeat: -1,
          duration: 6,
          ease: "linear",
        });

        gsap.to(".Arrow, .marquee1 img", {
          rotate: 0,
          duration: 0.3,
        });
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="scrolling-line">
      <div className="move">
        {items.map((item) => (
          <div className="marquee" key={`marquee-${item}`}>
            {/* <h1>welcome my website</h1> */}

            <img className="Arrow" src={imageUrl} alt="arrow" />

            <small></small>

         
           
           

            <img src="public/skill-icons/MongoDb.svg" alt="" />
             <img src="public/skill-icons/express.svg" alt="" />
               <img src="/skill-icons/React.svg" alt="" />
            <img src="public/skill-icons/Node.js.svg" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollingLine;
