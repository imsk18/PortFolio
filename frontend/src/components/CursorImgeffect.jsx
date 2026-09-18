import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const CursorImgEffect = ({ targetRef }) => {
  const images = [
    // "/img1.jpg",
    // "/img2.jpg",

    // "/img3.jpg",
    // "/img3.jpg",
    // "https://i.pinimg.com/736x/a8/a6/ca/a8a6ca15aba3a6433694a1146f050396.jpg",
    // "https://i.pinimg.com/736x/09/7b/6a/097b6a84a90ffefb077998a3e8a3f2fc.jpg",
    // "https://i.pinimg.com/736x/62/a8/99/62a899f88e97f59d38086e57e7eecd28.jpg",
    // "https://i.pinimg.com/1200x/23/dc/a4/23dca414143cf727bcea9770b7231d17.jpg",

    
    "/skill-icons/MongoDB.svg",
    "/skill-icons/Express.svg",
     "/skill-icons/React.svg",
    "/skill-icons/Node.js.svg",
    "/skill-icons/JavaScript.svg",
    "/skill-icons/HTML5.svg",
    "/skill-icons/CSS3.svg",

    "/skill-icons/Postman.svg",
    "/skill-icons/GitHub.svg",
    
    
   
    
  ];

  const containerRef = useRef(null);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const imageIndexRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef?.current;

    if (!container || !target) return;

    const threshold = window.innerWidth < 900 ? 50 : 100;

    const handleMouseMove = (e) => {
      const rect = target.getBoundingClientRect();

      // Agar cursor Home section ke bahar hai to kuch mat karo
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < threshold) return;

      const img = document.createElement("img");
      img.src = images[imageIndexRef.current];

      img.style.cssText = `
        position: absolute;
    left: ${x}px;
    top: ${y}px;
    width: 120px;
    height: 110px;
    object-fit: cover;
    border-radius: 12px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    width: 120px;

      `;

      container.appendChild(img);

      imageIndexRef.current =
        (imageIndexRef.current + 1) % images.length;

      gsap.fromTo(
        img,
        {
          xPercent: -50,
          yPercent: -50,
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(img, {
              scale: 0.2,
              opacity: 0,
              duration: 0.7,
              ease: "power2.in",
              onComplete: () => img.remove(),
            });
          },
        }
      );

      lastPosRef.current = { x, y };
    };

    target.addEventListener("mousemove", handleMouseMove);

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
    };
  }, [targetRef]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 10,
      }}
    />
  );
};

export default CursorImgEffect;