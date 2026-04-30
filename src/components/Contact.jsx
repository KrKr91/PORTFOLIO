import { useState } from 'react';
import '../style/layouts/_contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // on simule l'envoi et on branchera Formspree après
    console.log('Message envoyé :', formData);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>

      <div className="contact__content">

        <div className="contact__info">
          <p className="contact__intro">
            Tu as un projet, une opportunité ou juste envie d'échanger ?
            N'hésite pas à me contacter, je réponds rapidement 🙂
          </p>
          <ul className="contact__list">
            <li>
              <span>📧</span>
              <a href="mailto:aireaudeau.christophe@gmail.com">
                aireaudeau.christophe@gmail.com
              </a>
            </li>
            <li>
              <span>📱</span>
              <a href="tel:+33616477471">06 16 47 74 71</a>
            </li>
            <li>
              <span>📍</span>
              <span>Toulouse et ses alentours</span>
            </li>
          </ul>

          <div className="contact__socials">
            <a
              href="https://github.com/KrKr91"
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/christophe-a-428a551b3/"
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent && (
            <div className="contact__success">
              ✅ Message envoyé ! Je te réponds très vite.
            </div>
          )}

          <div className="contact__field">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ton prénom et nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ton@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Dis-moi tout..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary">
            Envoyer le message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;