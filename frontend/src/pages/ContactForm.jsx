import { useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/contact.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
    console.log({
  service: EMAILJS_SERVICE_ID,
  template: EMAILJS_TEMPLATE_ID,
  publicKey: EMAILJS_PUBLIC_KEY,
});
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("EmailJS is not configured. Add env vars and restart the dev server.");
      return;
    }

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
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
      toast.error(`EmailJS error: ${error.text || error.message || error}`);
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
            <span>shatrudhankumar75864@gmail.com</span>
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

