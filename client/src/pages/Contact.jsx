import "../style/contact.css";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({
          username: "",
          email: "",
          phone: "",    
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("CONTACT ERROR:", error);
    }
  };

  return (
    <div className="Contact-container">
      <div className="Contact-card">
        <h2 className="Contact-heading">Contact Us</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            className="Contact-input"
            type="text"
            name="username"
            placeholder="Your Name"
            value={formData.username}
            onChange={handleInput}
            required
          />

          <input
            className="Contact-input"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInput}
            required
          />
         <input
            className="Contact-input"
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInput}
            required
          />
          <textarea
            className="Contact-input"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInput}
            required
          ></textarea>

          <button type="submit" className="Contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
