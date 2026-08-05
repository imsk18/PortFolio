import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorImgEffect = ({ targetRef }) => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
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
        position:absolute;
        left:${x}px;
        top:${y}px;
        width:130px;
        height:230px;
        object-fit:cover;
        border-radius:8px;
        pointer-events:none;
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
              duration: 0.8,
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