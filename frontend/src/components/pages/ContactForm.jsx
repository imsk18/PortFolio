import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
    const [FormData, setFormData] = useState({
    Name:'',
    email:'',
    message:''
})

const [msg, setmsg] = useState('')
 function handleChange(e){
   setFormData({
    ...FormData,
    [e.target.name]:e.target.value

   })

    
   
    

 }

 async function handleSubmit(e){
    e.preventDefault()

    console.log(FormData);
await axios.post("http://10.103.100.209:3000/user", FormData)
   

    setmsg('message sent')

    setFormData({
        Name:'',
        email:'',
        message:''
    })
}

  return (
    <div id='contact'>
      {msg && <p>{msg}</p>}
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='enter your name'
            name='Name'
            required
          

            value={FormData.Name}
            onChange={handleChange}
            
             />
             <br />
             <br />

             <input type="email" 
             placeholder='enter your email'
             name='email'
             required
             value={FormData.email}
              onChange={handleChange}
            
             />
              <br />
             <br />

             <input type="text" 
             className='message'
             placeholder='enter your message'
             name='message'
             value={FormData.message}
             onChange={handleChange}

             />
              <br />
             <br />
             <input type="submit" />

        </form>
    </div>
  )
}

export default ContactForm