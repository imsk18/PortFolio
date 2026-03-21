import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className="header">
           <h1 className='a-h1' >about</h1>
      </div>
   
      <div className="img">
         <img src="./public/s.jpg" alt="" />
         <img src="./public/s.jpg" alt="" />
         <img src="./public/s.jpg" alt="" />
         <img src="./public/s.jpg" alt="" />
      </div>

      <div className="about-info">
        <h3>i'm shatrudhan</h3>
        <h4>fullstack developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae quasi iure. Temporibus natus delectus dignissimos dolorum labore distinctio, incidunt dolore commodi vel. Harum exercitationem dolor, quis tempora quos eius molestiae laudantium ullam quae consequatur sapiente cupiditate facilis facere.</p>
        <span>place: <a href="">bihar</a></span>
        <a href="">email: <span>kumar@gmail.com</span></a>
      </div>
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