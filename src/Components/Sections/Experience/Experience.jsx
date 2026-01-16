import React from "react";
import styled from "styled-components";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const ExperienceSection = styled.section`
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
    right: -100px;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
      right: -75px;
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
    left: -150px;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      left: -100px;
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

  .divider {
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(56, 120, 240, 0.3) 50%,
      transparent 100%
    );
    margin: 30px 0 40px;
  }

  .timeline {
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      background: rgba(56, 120, 240, 0.1);
      border-color: #3c83f6;
      transform: translateY(-3px);
    }

    &::before {
      content: "";
      position: absolute;
      left: -20px;
      top: 35px;
      width: 12px;
      height: 12px;
      background: #3c83f6;
      border-radius: 50%;
      border: 3px solid #0a0f1a;

      @media (max-width: 768px) {
        left: -15px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  .date {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #3c83f6;
    font-size: 1.1rem;
    font-weight: 600;

    svg {
      font-size: 1rem;
    }
  }

  .title-section {
    flex: 1;

    h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 5px;
    }

    .company {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #3c83f6;
      font-size: 1.1rem;
      font-weight: 600;

      svg {
        font-size: 1rem;
      }
    }
  }

  .timeline-content {
    margin-bottom: 20px;

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      position: relative;
      padding-left: 25px;
      margin-bottom: 12px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      font-size: 1rem;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: "▸";
        position: absolute;
        left: 0;
        color: #3c83f6;
        font-size: 1.1rem;
      }
    }
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;

    .tag {
      background: rgba(56, 120, 240, 0.15);
      color: #3c83f6;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(56, 120, 240, 0.3);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(56, 120, 240, 0.25);
        transform: translateY(-2px);
      }
    }
  }

  .education-item {
    .title-section h3 {
      color: #4caf50;
    }

    .company {
      color: #4caf50;
    }
  }

  /* Tablet specific adjustments */
  @media (max-width: 1024px) {
    padding: 70px 20px 50px;
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

    .timeline-item {
      padding: 20px;
      margin-bottom: 25px;

      &::before {
        left: -15px;
      }
    }

    .date {
      font-size: 1rem;
    }

    .title-section h3 {
      font-size: 1.2rem;
    }

    .company {
      font-size: 1rem;
    }

    .timeline-content li {
      font-size: 0.95rem;
      padding-left: 20px;
    }
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    padding: 50px 12px 30px;

    .timeline-item {
      padding: 18px;
      margin-bottom: 20px;

      &::before {
        left: -12px;
        width: 10px;
        height: 10px;
      }
    }

    .tech-tags {
      gap: 6px;

      .tag {
        padding: 5px 10px;
        font-size: 0.85rem;
      }
    }
  }

  /* Extra small devices */
  @media (max-width: 360px) {
    padding: 40px 10px 20px;

    .container {
      padding: 0 10px;
    }

    .timeline-item {
      padding: 16px;
    }

    .tech-tags {
      .tag {
        padding: 4px 8px;
        font-size: 0.8rem;
      }
    }
  }
`;

const Experience = () => {
  const timelineItems = [
    {
      year: "2022 - Present",
      title: "Freelance Full Stack Developer",
      company: "Local Freelance",
      icon: <FaBriefcase />,
      points: [
        "Developed and deployed responsive websites for local businesses using modern frameworks",
        "Implemented SEO strategies and analytics tracking that improved online visibility and client acquisition for each business",
      ],
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "Vue.js",
        "Full-Stack Development",
      ],
      type: "work",
    },
    {
      year: "2022 - 2023",
      title: "Online Coding Tutor",
      company: "Siddiqui House",
      icon: <FaBriefcase />,
      points: [
        "Conducted personalized coding tutorials for students at various skill levels, from beginners learning HTML/CSS to advanced developers mastering complex frameworks",
        "Successfully guided over 50+ students in building complete web applications, with many transitioning to professional development careers",
      ],
      tags: [
        "Career Coaching",
        "Code Review",
        "Mentoring",
        "Full-Stack",
        "Project Guidance",
      ],
      type: "work",
    },
    {
      year: "2023 - 2026",
      title:
        "Diploma of Associate Engineering in Computer Information Technology",
      company: "Government College of Technology",
      icon: <FaGraduationCap />,
      points: [
        "Specialized in Fields like Programming, Graphics Design, and Technical Hardware.",
        "Currently studying in the final year of this diploma.",
      ],
      tags: [
        "Data Structures",
        "Java",
        "Graphics Designing",
        "Modern Web Technologies",
      ],
      type: "education",
    },
  ];

  return (
    <ExperienceSection id="experience">
      <div className="container">
        <div className="section-header">
          <h1>Experience & Education</h1>
          <p>
            A timeline of my professional journey, key projects, and academic
            background. Building scalable solutions with modern technologies.
          </p>
        </div>

        <div className="divider" />

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${
                item.type === "education" ? "education-item" : ""
              }`}
            >
              <div className="timeline-header">
                <div className="date">
                  <FaCalendarAlt />
                  <span>{item.year}</span>
                </div>
                <div className="title-section">
                  <h3>{item.title}</h3>
                  <div className="company">
                    {item.icon}
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>

              <div className="timeline-content">
                <ul>
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
