import React from "react";
import styled from "styled-components";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaArrowRight } from "react-icons/fa";

const HeroSection = styled.section`
  min-height: 90dvh;
  padding: 20px;
  background: linear-gradient(45deg, #242247, #101722, #1d2a4e);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  position: relative;

  /* Decorative elements */
  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(56, 120, 240, 0.1) 0%,
      transparent 70%
    );
    top: -150px;
    left: -150px;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      top: -100px;
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
      rgba(255, 255, 255, 0.05) 0%,
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    gap: 40px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }
  }

  .left {
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
      max-width: 100%;
      align-items: center;
    }
  }

  .texts {
    display: flex;
    flex-direction: column;
    gap: 12px;

    p:first-child {
      color: #3878f0;
      font-family: "Courier New", monospace;
      font-size: 1.1rem;
      line-height: 1.4;

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      @media (max-width: 480px) {
        font-size: 0.9rem;
      }

      span {
        color: white;
        font-size: clamp(2.5rem, 5vw, 4.5rem);
        font-weight: 800;
        font-family: "Inter", sans-serif;
        display: block;
        margin-top: 10px;
        line-height: 1.1;

        @media (max-width: 768px) {
          font-size: clamp(2rem, 6vw, 3.5rem);
        }
      }
    }

    p:nth-child(2) {
      color: white;
      font-size: clamp(1.25rem, 2.5vw, 1.75rem);
      font-weight: 600;
      margin-top: 5px;

      @media (max-width: 768px) {
        font-size: clamp(1.1rem, 3vw, 1.5rem);
      }
    }

    p:nth-child(3) {
      color: rgba(255, 255, 255, 0.8);
      font-size: clamp(1rem, 2vw, 1.25rem);
      font-weight: 400;

      @media (max-width: 768px) {
        font-size: clamp(0.95rem, 2.5vw, 1.1rem);
      }
    }

    p:nth-child(5) {
      color: rgba(255, 255, 255, 0.6);
      font-size: clamp(0.9rem, 1.5vw, 1rem);
      line-height: 1.6;
      margin-top: 10px;

      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 10px;
      }

      @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0;
      }
    }
  }

  .btns {
    display: flex;
    gap: 15px;
    margin-top: 10px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      gap: 12px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      height: 48px;
      padding: 0 24px;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      outline: none;

      @media (max-width: 480px) {
        width: 100%;
        padding: 0 20px;
      }

      &:first-child {
        background: #3c83f6;
        color: white;
        min-width: 150px;

        &:hover {
          background: #2a6fd9;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(56, 120, 240, 0.3);
        }

        &:active {
          transform: translateY(0);
        }
      }

      &:last-child {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        min-width: 120px;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }

  .quick-links {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    svg {
      width: 28px;
      height: 28px;
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        color: #3c83f6;
        transform: translateY(-3px);
      }

      @media (max-width: 480px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;

    @media (max-width: 768px) {
      min-height: 300px;
      width: 100%;
      order: -1; /* Move to top on mobile */
    }

    /* Placeholder for image or graphic */
    .hero-graphic {
      width: 100%;
      max-width: 500px;
      height: 400px;
      background: linear-gradient(
        135deg,
        rgba(56, 120, 240, 0.1),
        rgba(255, 255, 255, 0.05)
      );
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        height: 300px;
        max-width: 400px;
      }

      @media (max-width: 480px) {
        height: 250px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 200px;
        height: 200px;
        background: radial-gradient(
          circle,
          rgba(56, 120, 240, 0.2) 0%,
          transparent 70%
        );
        border-radius: 50%;
        animation: float 6s ease-in-out infinite;
      }

      &::after {
        content: "";
        position: absolute;
        width: 150px;
        height: 150px;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 70%
        );
        border-radius: 50%;
        animation: float 8s ease-in-out infinite reverse;
      }

      .code-snippet {
        position: relative;
        z-index: 2;
        color: rgba(255, 255, 255, 0.9);
        font-family: "Courier New", monospace;
        font-size: 1.2rem;
        padding: 20px;
        text-align: center;

        .line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 10px 0;

          .comment {
            color: #4caf50;
          }

          .keyword {
            color: #ff9800;
          }

          .string {
            color: #e91e63;
          }
        }
      }
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }

  /* Tablet specific adjustments */
  @media (max-width: 1024px) {
    padding: 40px 20px;

    .container {
      gap: 30px;
    }

    .texts p:nth-child(5) {
      padding: 0;
    }
  }

  /* Mobile specific adjustments */
  @media (max-width: 768px) {
    min-height: 85dvh;
    padding: 20px 15px;

    .container {
      gap: 40px;
    }

    .left {
      gap: 15px;
    }

    .btns {
      margin-top: 15px;
    }
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    min-height: 80dvh;
    padding: 15px 10px;

    .texts p:first-child {
      line-height: 1.3;
    }

    .texts p:nth-child(5) {
      line-height: 1.5;
    }

    .quick-links {
      gap: 15px;
    }
  }

  /* Extra small devices */
  @media (max-width: 360px) {
    .texts p:first-child span {
      font-size: 2rem;
    }

    .texts p:nth-child(2) {
      font-size: 1.1rem;
    }

    .btns button {
      height: 44px;
      font-size: 0.95rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <div className="left">
          <div className="texts">
            <p>
              &lt;Hello World /&gt; I am <br />
              <span>Aayan Mumtaz</span>
            </p>
            <p>Full Stack Developer.</p>
            <p>Building Digital Experiences That Matter.</p>
            <br />
            <p>
              I specialize in building exceptional digital experiences.
              Currently, I am focused on building accessible, human-centered
              products at the intersection of design and engineering.
            </p>
          </div>
          <div className="btns">
            <button>
              View My Work <FaArrowRight />
            </button>
            <button>Contact Me</button>
          </div>
          <div className="quick-links">
            <a href="#" aria-label="LinkedIn">
              <CiLinkedin />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hero-graphic">
            <div className="code-snippet">
              <div className="line">
                <span className="comment">// Passionate Developer</span>
              </div>
              <div className="line">
                <span className="keyword">const</span> developer = &#123;
              </div>
              <div className="line">
                &nbsp;&nbsp;name: <span className="string">"Aayan"</span>,
              </div>
              <div className="line">
                &nbsp;&nbsp;role: <span className="string">"Full Stack"</span>,
              </div>
              <div className="line">
                &nbsp;&nbsp;passion:{" "}
                <span className="string">"Creating Impact"</span>
              </div>
              <div className="line">&#125;;</div>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
