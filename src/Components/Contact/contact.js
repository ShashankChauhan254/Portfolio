import React from "react";
import "./contact.css";
import Instagram from "../../Assets/Instagram.png";
import LinkedIn from "../../Assets/LinkedIn.png";
import WhatsApp from "../../Assets/WhatsApp.png";
import GitHub from "../../Assets/GitHub.png";
import Email from "../../Assets/Email.png";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData();
    form.append("Name", formData.name);
    form.append("Email", formData.email);
    form.append("Subject", formData.subject);
    form.append("Message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxfMEYQmutLLG8zaVfoZRO3k8mVMNQ08e5QQmLN4JNoVyNXbWK9_eiiSlVk-MH1Iuge/exec",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error occurred while sending.");
    }
  };

  return (
    <section id="Contact" className="Contact">
      <h2>Contact Me</h2>
      <p>I’ll be glad to answer your queries and feel free to connect</p>
      <form onSubmit={handleSubmit} className="ContactForm">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="SubmitButton">Send</button>
        <p className="status">{status}</p>
      </form>
        <div className="ContactDetails">
            <a href="https://www.instagram.com/_.shashank._.25._/profilecard/"><img src={Instagram} alt="Instagram" className="ContactIcon" herf=''/></a>
            <a href="https://www.linkedin.com/in/shashank-chauhan-b602b9209"><img src={LinkedIn} alt="LinkedIn" className="ContactIcon" /></a>
            <a href="https://wa.me/916350452839"><img src={WhatsApp} alt="WhatsApp" className="ContactIcon" /></a>
            <a href="https://github.com/ShashankChauhan254"><img src={GitHub} alt="GitHub" className="ContactIcon" /></a>
            <a href="mailto:shashank250403@gmail.com"><img src={Email} alt="Email" className="ContactIcon" /></a>
        </div>
    </section>
    );
}

export default Contact;
