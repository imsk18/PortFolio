// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import React, { useRef } from 'react'
// import { ScrollTrigger } from 'gsap/all';

// const Img = () => {
//     const mgRef = useRef()

//      gsap.registerPlugin(ScrollTrigger)

//      const imgArr = [
//         'https://plus.unsplash.com/premium_photo-1774026824616-42d56bb536b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1774173511915-c1777df1560f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
//         'https://images.unsplash.com/photo-1772339164169-4391cd6f0096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1774031826492-3d859b950574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1774031826492-3d859b950574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1773929651401-04db346329dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1774189033719-a884fc86a7c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D'
//      ]
//      console.log(imgArr);
     

//    useGSAP(()=>{
//     gsap.to(mgRef.current,{
//         y:300,
        

//          scrollTrigger:{
//             trigger:mgRef.current,
    
//       markers:true,
//       start: 'top 30% ',
//       end: "top -55%",
//       scrub:true,
      
//       onUpdate:(elem)=>{
//         const imgIndex = Math.floor(elem.progress * imgArr.length)
//        mgRef.current.src = imgArr[imgIndex]
        
//       }


//     }
//     })

//    })
//   return (
//     <div className='imgPage'>
//         <img  ref={mgRef} src="./public/s.jpg" alt="" />



//     </div>
//   )
// }

// export default Img