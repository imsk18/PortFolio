import React, { useState } from 'react'


const Project = () => {
    const [Num, setNum] = useState([1,2,3,4,5])
  return (
    <div id='Project'>
        {Num.map(()=>{
            return <div className="card">
               <img src="./public/s.jpg" alt="" />
               <div className="bottom">
                <a href="">Github</a>
                <a href="">LIve Demo</a>
               </div>
            </div>
        })}
    </div>
  )
}

export default Project