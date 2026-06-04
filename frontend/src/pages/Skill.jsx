import { useEffect, useRef, useState } from "react";
import '../styles/skill.css';

const skills = [
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "Node",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Gsap",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s",
  },

  {
    name: "Express",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  {
    name: "Three.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },

  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  {
    name: "Postman",
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },

  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

export default function Skill() {
  const canvasRef = useRef(null);

  const [gather, setGather] = useState(false);

  useEffect(() => {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    const center = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    function resizeCanvas() {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      center.x = canvas.width / 2;
      center.y = canvas.height / 2;
    }

    resizeCanvas();

    class Node {

      constructor(skill) {

        this.skill = skill;

        this.radius =
          window.innerWidth < 768 ? 20 : 38;

        this.padding =
          this.radius + 55;

        this.x =
          Math.random() *
          (canvas.width - this.padding * 2) +
          this.padding;

        this.y =
          Math.random() *
          (canvas.height - this.padding * 2) +
          this.padding;

        this.vx =
          (Math.random() - 0.5) * 0.6;

        this.vy =
          (Math.random() - 0.5) * 0.6;

        this.image = new Image();

        this.image.src = skill.img;
      }

      update() {

        if (!gather) {

          this.x += this.vx;
          this.y += this.vy;

          const leftLimit = this.padding;

          const rightLimit =
            canvas.width - this.padding;

          const topLimit = this.padding;

          const bottomLimit =
            canvas.height - this.padding;

          if (this.x <= leftLimit) {

            this.x = leftLimit;

            this.vx *= -1;
          }

          if (this.x >= rightLimit) {

            this.x = rightLimit;

            this.vx *= -1;
          }

          if (this.y <= topLimit) {

            this.y = topLimit;

            this.vy *= -1;
          }

          if (this.y >= bottomLimit) {

            this.y = bottomLimit;

            this.vy *= -1;
          }

          if (mouse.x && mouse.y) {

            const dx = this.x - mouse.x;

            const dy = this.y - mouse.y;

            const distance =
              Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {

              const force =
                (mouse.radius - distance) /
                mouse.radius;

              this.x +=
                (dx / distance) * force * 5;

              this.y +=
                (dy / distance) * force * 5;
            }
          }

        } else {

          const spread =
            window.innerWidth < 768
              ? 130
              : 220;

          this.x +=
            (
              center.x +
              (Math.random() - 0.5) *
              spread -
              this.x
            ) * 0.03;

          this.y +=
            (
              center.y +
              (Math.random() - 0.5) *
              spread -
              this.y
            ) * 0.03;
        }
      }

      draw() {

        const dx = center.x - this.x;

        const dy = center.y - this.y;

        const distance =
          Math.sqrt(dx * dx + dy * dy);

        const animatedWidth =
          Math.sin(
            Date.now() * 0.002 +
            distance * 0.01
          ) * 1.5 + 1.5;

        /* line */

        ctx.beginPath();

        ctx.moveTo(center.x, center.y);

        ctx.lineTo(this.x, this.y);

        ctx.strokeStyle =
          "rgba(255,255,255,0.15)";

        ctx.lineWidth = animatedWidth;

        ctx.stroke();

        /* glow */

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.radius + 6,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(255,255,255,0.05)";

        ctx.fill();

        /* bg */

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(255,255,255,0.08)";

        ctx.fill();

        /* image */

        ctx.save();

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.radius - 2,
          0,
          Math.PI * 2
        );

        ctx.clip();

        ctx.drawImage(
          this.image,
          this.x - this.radius + 4,
          this.y - this.radius + 4,
          (this.radius - 4) * 2,
          (this.radius - 4) * 2
        );

        ctx.restore();

        /* text */

        ctx.fillStyle = "white";

        ctx.font =
          window.innerWidth < 768
            ? "12px Inter"
            : "14px Inter";

        ctx.textAlign = "center";

        ctx.fillText(
          this.skill.name,
          this.x,
          this.y + this.radius + 18
        );
      }
    }

    const nodes = skills.map(
      (skill) => new Node(skill)
    );

    function drawGrid() {

      const size =
        window.innerWidth < 768
          ? 35
          : 55;

      ctx.strokeStyle =
        "rgba(255,255,255,0.04)";

      ctx.lineWidth = 1;

      for (
        let x = 0;
        x < canvas.width;
        x += size
      ) {

        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(x, canvas.height);

        ctx.stroke();
      }

      for (
        let y = 0;
        y < canvas.height;
        y += size
      ) {

        ctx.beginPath();

        ctx.moveTo(0, y);

        ctx.lineTo(canvas.width, y);

        ctx.stroke();
      }
    }

    let animationFrame;

    function animate() {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      drawGrid();

      nodes.forEach((node) => {

        node.update();

        node.draw();

      });

      animationFrame =
        requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (e) => {

      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e) => {

      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove
    );

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    return () => {

      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };

  }, [gather]);

  return (
    <section id="skill">
      <div className="heading"><img className="heading-img" src="public/layer.png" alt="" />
       <h1 >SKILLS</h1>
      </div>
     

      <div className="grid-bg"></div>

      <canvas
        ref={canvasRef}
        className="skill-canvas"
      />

      <div className="heading-wrapper">

        <h1
          className="main-heading"
          onClick={() =>
            setGather(!gather)
          }
        >
          FULLSTACK
        </h1>

      </div>

    </section>
  );
}