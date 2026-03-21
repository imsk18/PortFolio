// import React, { useState } from "react";

// const Skill = () => {

//   const skillsData = [
//     { name: "HTML", percent: 60 },
//     { name: "CSS", percent: 60 },
//     { name: "JavaScript", percent: 80 },
//     { name: "React", percent: 55 },
//   ];

//   const [X, setX] = useState(0)
//   function handleMouseMove(e,index){

//   const rect = e.currentTarget.getBoundingClientRect()
//   const x = e.clientX - rect.left

//   setX((prev)=>{
//     const updated = [...prev]
//     updated[index] = x
//     return updated
//   })
// }

//   const [progress, setProgress] = useState(
//     skillsData.map(() => 0)
//   );

//   const handleClick = () => {
//     skillsData.forEach((skill, index) => {
//       let count = 0;

//       const interval = setInterval(() => {
//         if (count >= skill.percent) {
//           clearInterval(interval);
//         } else {
//           count++;
//           setProgress((prev) => {
//             const updated = [...prev];
//             updated[index] = count;
//             return updated;
//           });
//         }
//       }, 30);
//     });
//   };

//   return (
//     <section id="skill">
//       <div className="skill-container">
//         <button onClick={handleClick}>Click</button>

//         {skillsData.map((skill, index) => (
//           <div className="skl" key={index} onMouseMove={(handleMouseMove)}>
//             <span>{skill.name}</span>
//             {/* <img src="./public/s.jpg" alt=""  style={{transform:`translateX(${X]}px)`}}/> */}
//             <span className="status">{progress[index]}%</span>

//             <div className="outer-line">
//               <div
//                 className="inner-line"
//                 style={{ width: `${progress[index]}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skill;

import React from 'react'

const Skill = () => {
  return (
    <div id='skill'>
      <div className="frontend">
        <div className="skill-card">
          <img src="../public/skill-icons/javaScript.svg" alt="" />
          <small >javaScript</small>
        </div>

        <div className="skill-card">
          <img src="../public/skill-icons/React.svg" alt="" />
          <small >React.js</small>
        </div>
        <div className="skill-card">
          <img src="../public/skill-icons/HTML5.svg" alt="" />
          <small >HTML</small>
        </div>
        <div className="skill-card">
          <img src="../public/skill-icons/css3.svg" alt="" />
          <small >CSS</small>
        </div>

      </div>




      <div className="backend">
        <div className="skill-card">
           <img src="../public/skill-icons/express.svg" alt="" />
           <small>express.js</small>
        </div>

         <div className="skill-card">
          <img src="../public/skill-icons/node.js.svg" alt="" />
          <small>Node.js</small>
        </div>

         <div className="skill-card">
        <img src="../public/skill-icons/MongoDb.svg" alt="" />
        <small>MongoDb</small>
        </div>
       
        

      </div>
      <div className="tools">

      </div>

    </div>
  )
}

export default Skill


