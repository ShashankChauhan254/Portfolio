import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import Instagram from "../../Assets/Instagram.png";
import LinkedIn from "../../Assets/LinkedIn.png";
import WhatsApp from "../../Assets/WhatsApp.png";
import GitHub from "../../Assets/GitHub.png";
import Email from "../../Assets/Email.png";

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
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
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { href: "https://www.instagram.com/_.shashank._.25._/profilecard/", img: Instagram, alt: "Instagram" },
    { href: "https://www.linkedin.com/in/shashank-chauhan-b602b9209", img: LinkedIn, alt: "LinkedIn" },
    { href: "https://wa.me/916350452839", img: WhatsApp, alt: "WhatsApp" },
    { href: "https://github.com/ShashankChauhan254", img: GitHub, alt: "GitHub" },
    { href: "mailto:shashank250403@gmail.com", img: Email, alt: "Email" },
  ];

  return (
    <section id="Contact" className={`Contact ${inView ? "inView" : ""}`} ref={sectionRef}>
      <h2>Contact Me</h2>
      <p>I’ll be glad to answer your queries and feel free to connect</p>
      <form onSubmit={handleSubmit} className="ContactForm">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ "--i": 0 }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ "--i": 1 }}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ "--i": 2 }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={{ "--i": 3 }}
          required
        ></textarea>
        <button type="submit" className="SubmitButton" style={{ "--i": 4 }} disabled={sending}>
          {sending ? <span className="spinner" /> : "Send"}
        </button>
        {status && <p className="status">{status}</p>}
      </form>
        <div className="ContactDetails">
            {socials.map((s, i) => (
              <a href={s.href} key={s.alt} style={{ "--i": i }} target="_blank" rel="noopener noreferrer">
                <img src={s.img} alt={s.alt} className="ContactIcon" />
              </a>
            ))}
        </div>
    </section>
    );
}

export default Contact;