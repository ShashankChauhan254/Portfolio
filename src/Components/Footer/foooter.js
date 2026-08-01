import React, { useEffect, useRef, useState } from 'react';
import './footer.css';
import { Link } from 'react-scroll';
import Instagram from "../../Assets/Instagram.png";
import LinkedIn from "../../Assets/LinkedIn.png";
import WhatsApp from "../../Assets/WhatsApp.png";
import GitHub from "../../Assets/GitHub.png";
import Email from "../../Assets/Email.png";

const QUICK_LINKS = [
  { to: "intro", label: "Home" },
  { to: "About", label: "About Me" },
  { to: "Education", label: "Education" },
  { to: "Experience", label: "Experience" },
  { to: "Skills", label: "Skills" },
  { to: "Project", label: "Projects" },
  { to: "ResearchPaper", label: "Research Paper" },
  { to: "Positions", label: "PORs" },
  { to: "Contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/_.shashank._.25._/profilecard/", img: Instagram, alt: "Instagram" },
  { href: "https://www.linkedin.com/in/shashank-chauhan-b602b9209", img: LinkedIn, alt: "LinkedIn" },
  { href: "https://wa.me/916350452839", img: WhatsApp, alt: "WhatsApp" },
  { href: "https://github.com/ShashankChauhan254", img: GitHub, alt: "GitHub" },
  { href: "mailto:shashank250403@gmail.com", img: Email, alt: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`footer ${inView ? "inView" : ""}`} ref={footerRef}>
      <div className="footerDivider" />
    
      <div className="footerTop">
        <div className="footerLinks">
          {QUICK_LINKS.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="footerLink"
              style={{ '--i': i }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footerSocials">
          {SOCIALS.map((s, i) => (
            <a
              href={s.href}
              key={s.alt}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--i': i }}
            >
              <img src={s.img} alt={s.alt} className="footerIcon" />
            </a>
          ))}
        </div>
      </div>

      <p className="footerCopy">
        Copyright &copy; {year} Shashank Chauhan. All Rights Reserved.
      </p>

      <Link
        to="intro"
        smooth={true}
        duration={500}
        className="backToTop"
        aria-label="Back to top"
      >
        ↑
      </Link>
    </footer>
  );
};

export default Footer;