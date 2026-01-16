import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 100px 20px 60px;
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
    top: 80px;
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
    bottom: 80px;
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
    margin-bottom: 50px;

    h1 {
      font-size: clamp(2.2rem, 4vw, 3rem);
      font-weight: 700;
      background: linear-gradient(90deg, #3c83f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 12px;
      line-height: 1.1;
    }

    h2 {
      font-size: clamp(1.5rem, 2.5vw, 1.8rem);
      font-weight: 600;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 15px;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.1rem;
      line-height: 1.5;
      max-width: 700px;
      margin: 0 auto;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  .skills-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
      gap: 40px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .skills-column {
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #3c83f6;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(56, 120, 240, 0.3);
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 15px;
      margin-top: 25px;
    }
  }

  .skills-grid {
    display: grid;
    gap: 16px;
  }

  .skill-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 16px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(56, 120, 240, 0.1);
      border-color: #3c83f6;
      transform: translateY(-3px);
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .skill-name {
      font-size: 1rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.95);
    }

    .skill-percentage {
      font-size: 1rem;
      font-weight: 600;
      color: #3c83f6;
    }

    .progress-bar {
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #3c83f6, #8b5cf6);
        border-radius: 3px;
        transition: width 1.5s ease-in-out;
      }
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 30px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(56, 120, 240, 0.1);
      border-color: #3c83f6;
      transform: translateY(-3px);
    }

    .feature-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #3c83f6;
      margin-bottom: 8px;
    }

    .feature-description {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.95rem;
      line-height: 1.4;
    }
  }

  /* Tablet specific adjustments */
  @media (max-width: 1024px) {
    padding: 70px 20px 50px;

    .skills-content {
      gap: 30px;
    }
  }

  /* Mobile specific adjustments */
  @media (max-width: 768px) {
    padding: 60px 15px 40px;

    .section-header {
      margin-bottom: 30px;
    }

    .section-header h1 {
      font-size: clamp(1.8rem, 4vw, 2.2rem);
    }

    .section-header h2 {
      font-size: clamp(1.3rem, 3vw, 1.6rem);
    }

    .skills-column h3 {
      font-size: 1.3rem;
    }

    .skills-column h4 {
      font-size: 1rem;
    }

    .skill-item {
      padding: 14px;
    }

    .skill-name,
    .skill-percentage {
      font-size: 0.95rem;
    }

    .features-grid {
      gap: 10px;
    }

    .feature-card {
      padding: 16px;

      .feature-title {
        font-size: 1rem;
      }

      .feature-description {
        font-size: 0.9rem;
      }
    }
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    padding: 50px 12px 30px;

    .skills-column h3 {
      font-size: 1.2rem;
    }

    .skills-grid {
      gap: 12px;
    }

    .skill-item {
      padding: 12px;
    }

    .features-grid {
      gap: 8px;
    }

    .feature-card {
      padding: 14px;
    }
  }

  /* Extra small devices */
  @media (max-width: 360px) {
    padding: 40px 10px 20px;

    .container {
      padding: 0 10px;
    }

    .skill-item {
      padding: 10px;
    }

    .feature-card {
      padding: 12px;
    }
  }
`;

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: "React.js", percentage: 85 },
      { name: "Bootstrap", percentage: 90 },
      { name: "Tailwind CSS", percentage: 98 },
      { name: "Framer Motion", percentage: 85 },
    ],
    backend: [
      { name: "Node.js", percentage: 92 },
      { name: "Express.js", percentage: 88 },
      { name: "Flask", percentage: 45 },
      { name: "MongoDB", percentage: 90 },
    ],
    tools: [
      { name: "Lunacy", percentage: 80 },
      { name: "Icons8", percentage: 75 },
      { name: "Obsidian", percentage: 90 },
    ],
  };

  const features = [
    {
      title: "Fast Performance",
      description: "Optimized for 99+ Lighthouse scores",
    },
    {
      title: "Fully Responsive",
      description: "Seamless experience across all devices",
    },
    {
      title: "Secure by Default",
      description: "Best practices for data protection",
    },
  ];

  return (
    <SkillsSection id="skills">
      <div className="container">
        <div className="section-header">
          <h1>Technical Arsenal</h1>
          <h2>Skills & Technologies</h2>
          <p>
            A comprehensive overview of my technical stack, featuring a blend of
            modern frontend frameworks, robust backend systems, and essential
            DevOps tools.
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-column">
            <h3>Frontend</h3>
            <h4>UI/UX & Interactions</h4>
            <div className="skills-grid">
              {skillsData.frontend.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3>Backend</h3>
            <h4>Server & Database</h4>
            <div className="skills-grid">
              {skillsData.backend.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <h3>Design Toolset</h3>
            <h4>Infrastructure & Design</h4>
            <div className="skills-grid">
              {skillsData.tools.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SkillsSection>
  );
};

export default Skills;
