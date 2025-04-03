// Import useState for functional 'Form Data'
import { useState } from 'react';

// Function to allow users to input contact information for the creator to receive
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Add a message notifying the user their message has been sent including the info being delivered e.g. name, email, message.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  // Add choices for users to insert their information to: name, email, and a message for the creator
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email:</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message:</label>
            <div className="control">
              <textarea
                className="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="button is-link" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
