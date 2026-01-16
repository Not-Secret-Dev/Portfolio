import React, { useState } from "react";
import styled from "styled-components";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaNetworkWired,
} from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";

const ContactSection = styled.section`
  padding: 80px 20px 40px;
  background: #0a0f1a;
  color: white;
  font-family: "Inter", sans-serif;
  position: relative;
  overflow: hidden;

  /* Decorative background elements */
  &::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(56, 120, 240, 0.05) 0%,
      transparent 70%
    );
    top: 100px;
    left: -100px;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
      left: -75px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 70%
    );
    bottom: 100px;
    right: -150px;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      right: -100px;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 15px;
    }

    @media (max-width: 480px) {
      padding: 0 12px;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: clamp(2.2rem, 4vw, 3rem);
      font-weight: 800;
      background: linear-gradient(90deg, #3c83f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 15px;
      line-height: 1.1;
      letter-spacing: -0.5px;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 40px;
    color: #4caf50;
    font-size: 1rem;
    font-weight: 500;

    .status-icon {
      color: #4caf50;
      font-size: 1.2rem;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      background: #4caf50;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
  }

  .contact-subtitle {
    text-align: center;
    margin-bottom: 50px;

    h2 {
      font-size: clamp(1.3rem, 2.5vw, 1.6rem);
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 10px;
      font-weight: 600;
    }

    .code-style {
      font-family: "Courier New", monospace;
      color: #3c83f6;
      font-size: clamp(1.1rem, 2vw, 1.3rem);
      opacity: 0.9;
    }
  }

  .divider {
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(56, 120, 240, 0.3) 50%,
      transparent 100%
    );
    margin-bottom: 40px;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    @media (max-width: 1024px) {
      gap: 40px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .contact-form {
    .form-group {
      margin-bottom: 25px;

      label {
        display: block;
        margin-bottom: 8px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .form-input,
      .form-textarea {
        width: 100%;
        padding: 14px 16px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: white;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: #3c83f6;
          background: rgba(255, 255, 255, 0.08);
        }

        &::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
      }

      .form-textarea {
        min-height: 120px;
        resize: vertical;
      }
    }

    .send-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      padding: 16px;
      background: linear-gradient(135deg, #3c83f6, #2a6fd9);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(56, 120, 240, 0.4);
      }

      &:active {
        transform: translateY(0);
      }

      svg {
        font-size: 1.2rem;
      }
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(56, 120, 240, 0.1);
      border-color: #3c83f6;
      transform: translateX(5px);
    }

    .info-icon {
      color: #3c83f6;
      font-size: 1.4rem;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(56, 120, 240, 0.1);
      border-radius: 10px;
      flex-shrink: 0;
    }

    .info-content {
      flex: 1;

      h3 {
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      p,
      a {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.95);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #3c83f6;
        }
      }
    }
  }

  .network-item {
    .info-content {
      p {
        font-family: "Courier New", monospace;
        color: #3c83f6;
      }
    }
  }

  .footer {
    text-align: center;
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;

    .copyright {
      margin-bottom: 10px;
    }

    .design-credit {
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.85rem;

      .heart {
        color: #e91e63;
        margin: 0 5px;
      }

      .code {
        color: #3c83f6;
        margin: 0 5px;
      }
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Tablet specific adjustments */
  @media (max-width: 1024px) {
    padding: 70px 20px 30px;

    .contact-content {
      gap: 40px;
    }
  }

  /* Mobile specific adjustments */
  @media (max-width: 768px) {
    padding: 60px 15px 30px;

    .section-header h1 {
      font-size: clamp(1.8rem, 4vw, 2.2rem);
    }

    .contact-subtitle h2 {
      font-size: clamp(1.2rem, 3vw, 1.4rem);
    }

    .contact-content {
      gap: 30px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .info-item {
      padding: 16px;
    }

    .footer {
      margin-top: 40px;
      padding-top: 20px;
    }
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    padding: 50px 12px 20px;

    .contact-subtitle .code-style {
      font-size: 1rem;
    }

    .info-item {
      .info-icon {
        width: 45px;
        height: 45px;
        font-size: 1.2rem;
      }

      .info-content {
        h3 {
          font-size: 0.85rem;
        }

        p,
        a {
          font-size: 1rem;
        }
      }
    }

    .footer {
      margin-top: 30px;
    }
  }

  /* Extra small devices */
  @media (max-width: 360px) {
    padding: 40px 10px 15px;

    .container {
      padding: 0 10px;
    }

    .info-item {
      padding: 14px;

      .info-icon {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent! I'll get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <div className="section-header">
          <h1>Aayan.dev</h1>
          <div className="status">
            <HiStatusOnline className="status-icon" />
            <div className="status-dot" />
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
        </div>

        <div className="contact-subtitle">
          <h2>Get In Touch</h2>
          <div className="code-style">
            &lt; Let's build something extraordinary /&gt;
          </div>
        </div>

        <div className="divider" />

        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="send-btn">
                <FaPaperPlane />
                Send
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>EMAIL</h3>
                <a href="mailto:ayaanmumtaz8@gmail.com">
                  ayaanmumtaz8@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>BASE OF OPERATIONS</h3>
                <p>Lahore, Punjab, Pakistan</p>
              </div>
            </div>

            <div className="info-item network-item">
              <div className="info-icon">
                <FaNetworkWired />
              </div>
              <div className="info-content">
                <h3>CONNECT_VIA_NETWORK</h3>
                <p>https://www.linkedin.com/in/aayan-mumtaz-aba84831a/</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p className="copyright">© 2024 Aayan Mumtaz. All rights reserved.</p>
          <p className="design-credit">
            Designed with <span className="heart">❤️</span> and{" "}
            <span className="code">Code</span>
          </p>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
