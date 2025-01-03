import React from "react";
import "./contact.css";
import Instagram from "../../Assets/Instagram.png";
import LinkedIn from "../../Assets/LinkedIn.png";
import WhatsApp from "../../Assets/WhatsApp.png";
import GitHub from "../../Assets/GitHub.png";
import Email from "../../Assets/Email.png";

const Contact = () => {
    return (
        <section id="Contact">
        <span className="Title">Contact</span>
        <span className="ContactContainer">Please fill out the form below to discuss any work oppertunities.</span>
        <form className="ContactForm">
            <input type="text" placeholder="Your Name" className="Name" />
            <input type="email" placeholder="Your Email" className="Email" />
            <textarea placeholder="Your Message" className="Message" rows={5}/>
            <button className="SubmitButton" type="submit" value='send'>Submit</button>
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
