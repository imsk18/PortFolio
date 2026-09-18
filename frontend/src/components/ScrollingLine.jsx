




import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/ScrollingLine.css";

const imageUrl =
  "https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg";

function ScrollingLine() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const arrows = track.querySelectorAll(".Arrow");
    let direction = 1;
    let position = 0;
    let groupWidth = track.firstElementChild.offsetWidth;

    const updatePosition = () => {
      position -= direction * 1.2 * gsap.ticker.deltaRatio(60);

      if (position <= -groupWidth) {
        position += groupWidth;
      } else if (position >= 0) {
        position -= groupWidth;
      }

      gsap.set(track, { x: position });
    };
    const resizeHandler = () => {
      groupWidth = track.firstElementChild.offsetWidth;
    };
    const setDirection = (value) => {
      direction = value > 0 ? 1 : -1;
      gsap.to(arrows, {
        rotate: direction === 1 ? 180 : 0,
        duration: 0.35,
        overwrite: true,
      });
    };
    const wheelHandler = (event) => {
      if (event.deltaY !== 0) setDirection(event.deltaY);
    };
    let touchStartX = 0;
    const touchStartHandler = (event) => {
      touchStartX = event.touches[0].clientX;
    };
    const touchMoveHandler = (event) => {
      const distance = event.touches[0].clientX - touchStartX;
      if (Math.abs(distance) > 3) {
        setDirection(-distance);
        touchStartX = event.touches[0].clientX;
      }
    };

    window.addEventListener("wheel", wheelHandler, { passive: true });
    window.addEventListener("resize", resizeHandler);
    track.addEventListener("touchstart", touchStartHandler, { passive: true });
    track.addEventListener("touchmove", touchMoveHandler, { passive: true });
    gsap.ticker.add(updatePosition);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("resize", resizeHandler);
      track.removeEventListener("touchstart", touchStartHandler);
      track.removeEventListener("touchmove", touchMoveHandler);
      gsap.ticker.remove(updatePosition);
    };
  }, []);

  const content = Array.from({ length: 6 }, (_, index) => (
    <div className="marquee" key={index}>
      <img className="Arrow" src={imageUrl} alt="" />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        alt="Express"
      />
      <img src="/skill-icons/React.svg" alt="React" />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
      />
    </div>
  ));

  return (
    <div className="scrolling-line" style={{backgroundColor:"red"}}>
      <div className="move" ref={trackRef} >
        <div className="marquee-group" >{content} </div>
        <div className="marquee-group" aria-hidden="true"style={{width:"100%"}}  >
          {content}
        </div>
      </div>
    </div>
  );
}

export default ScrollingLine;






