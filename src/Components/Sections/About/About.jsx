import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const AboutSection = styled.section`
  padding: 100px 20px;
  background: #0a0f1a;
  color: white;
  font-family: "Inter", sans-serif;
  position: relative;
  overflow: hidden;

  /* Decorative background elements */
  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(56, 120, 240, 0.05) 0%,
      transparent 70%
    );
    top: 100px;
    left: -150px;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      left: -100px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 70%
    );
    bottom: -200px;
    right: -200px;

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
      bottom: -125px;
      right: -125px;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;

    @media (max-width: 1024px) {
      gap: 40px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 40px;
    }
  }

  .left {
    flex: 1;
    max-width: 600px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .right {
    flex: 1;
    max-width: 500px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .section-title {
    margin-bottom: 30px;

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      background: linear-gradient(90deg, #3c83f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 15px;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      line-height: 1.6;

      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }

  .about-text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 40px;

    p {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .highlight {
      color: #3c83f6;
      font-weight: 600;
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

  .stat-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(56, 120, 240, 0.3);
      transform: translateY(-5px);
    }

    .stat-number {
      display: block;
      font-size: clamp(2rem, 3vw, 2.5rem);
      font-weight: 700;
      color: #3c83f6;
      margin-bottom: 5px;
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  .expertise-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 40px;
  }

  .expertise-item {
    display: flex;
    align-items: center;
    gap: 12px;

    .icon {
      color: #4caf50;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    span {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #3c83f6, #2a6fd9);
    color: white;
    padding: 16px 32px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(56, 120, 240, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .tech-stack {
    margin-top: 40px;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: white;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 15px;

      @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      }
    }

    .tech-item {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 15px;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(56, 120, 240, 0.1);
        border-color: #3c83f6;
      }

      .tech-icon {
        font-size: 1.8rem;
        margin-bottom: 8px;
        color: #3c83f6;
      }

      .tech-name {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }

  /* Tablet specific adjustments */
  @media (max-width: 1024px) {
    padding: 60px 20px;
  }

  /* Mobile specific adjustments */
  @media (max-width: 768px) {
    padding: 50px 15px;

    .about-content {
      gap: 30px;
    }

    .section-title h2 {
      font-size: clamp(1.8rem, 5vw, 2.5rem);
    }

    .about-text {
      font-size: 1rem;
    }
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    padding: 40px 10px;

    .download-btn {
      width: 100%;
      justify-content: center;
      padding: 14px 24px;
    }

    .stat-item {
      padding: 15px;
    }
  }
`;

const About = () => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚂" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C#", icon: "🎮" },
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <div className="about-content">
          <div className="left">
            <div className="section-title">
              <h2>About Me</h2>
              <p>Get to know me better</p>
            </div>

            <div className="about-text">
              <p>
                <span className="highlight">I build pixels with purpose.</span>{" "}
                Hello! I'm Aayan Mumtaz, a Full-Stack Web Developer & UI/UX
                Designer based in Lahore, Pakistan. With over 3 years of
                experience, I specialize in bridging the gap between functional
                code and beautiful design.
              </p>
              <p>
                I build scalable web applications that solve real-world
                problems. Whether it's crafting a pixel-perfect frontend or
                architecting a robust backend API, I bring passion and precision
                to every commit.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Tech Focus</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Lahore</span>
                <span className="stat-label">Based In</span>
              </div>
            </div>

            <div className="expertise-list">
              <div className="expertise-item">
                <FaCheck className="icon" />
                <span>Full-Stack Web Development</span>
              </div>
              <div className="expertise-item">
                <FaCheck className="icon" />
                <span>UI/UX Design & Prototyping</span>
              </div>
              <div className="expertise-item">
                <FaCheck className="icon" />
                <span>Responsive Web Design</span>
              </div>
              <div className="expertise-item">
                <FaCheck className="icon" />
                <span>API Development & Integration</span>
              </div>
            </div>

            <a href="#" className="download-btn">
              Download Resume
            </a>
          </div>

          <div className="right">
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-grid">
                {techStack.map((tech, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon">{tech.icon}</div>
                    <div className="tech-name">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-text" style={{ marginTop: "40px" }}>
              <p>
                My approach combines technical expertise with user-centered
                design principles to create products that are not only
                functional but also delightful to use.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or mentoring aspiring
                developers in the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
