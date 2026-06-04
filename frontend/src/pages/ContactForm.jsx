import { useState } from "react";
import '../styles/contact.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    





console.log("submitted")












    

    try {
      const response = await fetch(" https://portfolio-backend-7qd9.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! 🚀", {
          position: "top-right",
          autoClose: 3000,
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      toast.error("Server error. Please try again later ❌");
    }
  };

  return (
    
    <section id="contact">
 <ToastContainer />
      <div className="contact-header">
        <h1>
          <i className="ri-customer-service-2-fill"></i>
          Get In Touch
        </h1>

        <p>
          {/* If you have any project in mind or would like to collaborate,
          feel free to get in touch. I am always open to discussing
          new ideas, opportunities, and partnerships. */}
          Have a question or want to work together? Feel free to reach out anytime.
        </p>
      </div>

      <div className="contact-card">

        {/* Left Side */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p className="info-text">
           Have a project, question, or collaboration opportunity?
Feel free to reach out. I'd love to hear from you.
          </p>

          <div className="info-item">
            <i className="ri-phone-fill"></i>
            <span>+91 9693375864</span>
          </div>

          <div className="info-item">
            <i className="ri-mail-fill"></i>
            <span>shatrudhan@email.com</span>
          </div>

          <div className="info-item">
            <i className="ri-map-pin-fill"></i>
            <span>India</span>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="row">

            <div className="input-group">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label>Your Email</label>
            </div>

          </div>

          <div className="input-group">
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <label>Your Subject</label>
          </div>

          <div className="input-group">
            <textarea
              rows="5"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label>Message</label>
          </div>

          <button className="submit-btn" type="submit">Send Message    <i className="ri-send-plane-fill"></i> </button>
             
           
           
         

        </form>

      </div>

    </section>
  );
}

export default Contact;

