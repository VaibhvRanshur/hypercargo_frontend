import ContactForm from "../components/ContactForm";  

export default function Contact() {
  return (
    <section className="page">
      <h2 className="contact-head">Contact Us</h2>
      <p>Reach us anytime through the following channels:</p>
      <div className="contact-links">
       <div className="contact-icons">
          <a href="https://wa.me/917887445772" target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="contact-img"/>
          </a>  

          <a href="mailto:info@hypercargooverseas.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/mail-icon.png" alt="mail" className="contact-img"/>
          </a>

            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.png" alt="Facebook" className="contact-img"/>
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/x.png" alt="Twitter" className="contact-img"/>
          </a>

          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-icon.png" alt="Instagram" className="contact-img"/>
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-icon.png" alt="LinkedIn" className="contact-img"/>
          </a>

          <a href="tel:+917447886846">
            <img src="/images/call-icon.png" alt="call" className="contact-img"/>
          </a>
        
        </div>
          <p>Or send us a message directly:</p>
      <ContactForm />
      </div>
    </section>
  );
}
