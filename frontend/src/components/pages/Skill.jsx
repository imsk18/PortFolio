import React, { useState } from "react";

const Skill = () => {

  const skillsData = [
    { name: "HTML", percent: 60 },
    { name: "CSS", percent: 60 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 55 },
  ];

  const [X, setX] = useState(0)
  function handleMouseMove(e,index){

  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left

  setX((prev)=>{
    const updated = [...prev]
    updated[index] = x
    return updated
  })
}

  const [progress, setProgress] = useState(
    skillsData.map(() => 0)
  );

  const handleClick = () => {
    skillsData.forEach((skill, index) => {
      let count = 0;

      const interval = setInterval(() => {
        if (count >= skill.percent) {
          clearInterval(interval);
        } else {
          count++;
          setProgress((prev) => {
            const updated = [...prev];
            updated[index] = count;
            return updated;
          });
        }
      }, 30);
    });
  };

  return (
    <section id="skill">
      <div className="skill-container">
        <button onClick={handleClick}>Click</button>

        {skillsData.map((skill, index) => (
          <div className="skl" key={index} onMouseMove={(handleMouseMove)}>
            <span>{skill.name}</span>
            {/* <img src="./public/s.jpg" alt=""  style={{transform:`translateX(${X]}px)`}}/> */}
            <span className="status">{progress[index]}%</span>

            <div className="outer-line">
              <div
                className="inner-line"
                style={{ width: `${progress[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;