import React from 'react'
import '../styles/about.css';
import ScrollingLine from '../components/ScrollingLine';

const About = () => {
  return (
    
    <div id='about'>
      <div className="header">
           <h1 className='a-h1' >About</h1>
      </div>
 
      {<div className="img-container">

        <div className="right-img">
          <img src="./public/s.jpg" alt="" />
         <img src="./public/s.jpg" alt="" />
        </div> 

         <div className="left-img">
       
         <img src="./public/s.jpg" alt="" />
        </div>
       
        
       
      </div> } 

      <div className="about-info">
        <div className="upper">
           <h2>I'm Shatrudhan</h2>
        <h4>fullstack developer</h4>
        </div>
        <div className="middle">
           <p>Hello! I'm Shatrudhan Kumar, a Full-Stack Developer and BCA student passionate about building modern, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL. I enjoy learning new technologies, creating innovative projects, and solving real-world problems through code.
</p>
        </div>
       <div className="info">
         <span>place: <a href="">Bihar</a></span>
        <span>email: <a href="">kumarshatrudhan94263@gmail.com</a></span>
       </div>
       
       
       
      </div>
      <ScrollingLine />
    </div>
  )
}

export default About






























// import React, { useState } from 'react'

// const About = () => {
//   const Skilldata = [
//     { name:'html',percent:65 },
     
//     {name:'CSS',percent:60 },
      
   
//     {
//       name:'javaScript',
//       percent:60
//     },
//     {
//       name:'React',
//       percent:50,
//       img:"https://i.pinimg.com/1200x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg"
//     },
//     {
//       name:'React',
//       percent:50
//     },
//   ]

// const [Progress, setProgress] = useState(Skilldata.map(()=>0))
//  function handleAnimation(){
//   Skilldata.forEach((skill,idx)=>{
//     let count = 0
//     const inter = setInterval(()=>{
//       if(count>= skill.percent){
//         clearInterval(inter)
//       }else{
//         count++
//         setProgress((prev)=>{
//           let updated = [...prev]
//           updated[idx] = count
//           return updated

//         })
//       }
//     },30)

//   })
//  }
// // handleAnimation()
// const [Pos, setPos] = useState({x:0,y:0})
//  function handlemousemove(e){
//   setPos({
//     x:e.clientX,
//     y:e.clientY
//   })
// console.log(Pos);


//  }
  
//   return (
//     <div id='about'>
//       {Skilldata.map((skill,idx)=>{
//         return <div className="container" key={idx} onMouseMove={handlemousemove}>
//           <img src = {skill.img} style={{left:`${Pos.x}px`}} alt="" />
//         <p>{skill.name}</p>
//         <p>{Progress[idx]}%</p>
//         <div className="outer">
//           <div className="inner" style={{width:`${Progress[idx]}%`}}></div>
//         </div>
       
//       </div>
//       })}
      
       
// <button onClick={handleAnimation}>click</button>
//     </div>
//   )
// }

// export default About