import React from "react";
import styled from "styled-components";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaArrowRight } from "react-icons/fa";

const HeroSection = styled.section`
  min-height: 90vh;
  padding-top: 10px;
  padding-bottom: 40px;
  background: #0a0f1a;
  color: white;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;

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
    top: 10%;
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
    bottom: 10%;
    right: -200px;

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
      right: -125px;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
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
    gap: 24px;

    @media (max-width: 768px) {
      max-width: 100%;
      align-items: center;
      gap: 20px;
    }
  }

  .texts {
    display: flex;
    flex-direction: column;
    gap: 16px;

    p:first-child {
      color: #3c83f6;
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
        background: linear-gradient(90deg, #3c83f6, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: clamp(3rem, 5vw, 4.5rem);
        font-weight: 800;
        font-family: "Inter", sans-serif;
        display: block;
        margin-top: 8px;
        line-height: 1.1;
        letter-spacing: -0.5px;

        @media (max-width: 768px) {
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          margin-top: 6px;
        }
      }
    }

    p:nth-child(2) {
      color: rgba(255, 255, 255, 0.95);
      font-size: clamp(1.5rem, 2.5vw, 2rem);
      font-weight: 700;
      margin-top: 4px;

      @media (max-width: 768px) {
        font-size: clamp(1.3rem, 3vw, 1.8rem);
      }
    }

    p:nth-child(3) {
      color: rgba(255, 255, 255, 0.85);
      font-size: clamp(1.1rem, 2vw, 1.4rem);
      font-weight: 500;
      margin-bottom: 8px;

      @media (max-width: 768px) {
        font-size: clamp(1rem, 2.5vw, 1.3rem);
      }
    }

    p:nth-child(5) {
      color: rgba(255, 255, 255, 0.75);
      font-size: clamp(1rem, 1.5vw, 1.1rem);
      line-height: 1.7;
      margin-top: 0;
      margin-bottom: 8px;

      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 10px;
        line-height: 1.6;
      }

      @media (max-width: 480px) {
        font-size: 0.95rem;
        padding: 0;
      }
    }
  }

  .btns {
    display: flex;
    gap: 20px;
    margin-top: 0;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      gap: 15px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 52px;
      padding: 0 28px;
      font-size: 1.05rem;
      font-weight: 600;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      outline: none;

      @media (max-width: 480px) {
        width: 100%;
        padding: 0 24px;
        height: 50px;
      }

      &:first-child {
        background: linear-gradient(135deg, #3c83f6, #2a6fd9);
        color: white;
        min-width: 160px;

        &:hover {
          background: linear-gradient(135deg, #2a6fd9, #1a5fca);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(56, 120, 240, 0.3);
        }

        &:active {
          transform: translateY(0);
        }
      }

      &:last-child {
        background: rgba(255, 255, 255, 0.05);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        min-width: 140px;

        &:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
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
    margin-top: 0;

    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(56, 120, 240, 0.1);
        border-color: #3c83f6;
        transform: translateY(-3px);
      }

      svg {
        width: 24px;
        height: 24px;
        color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s ease;

        @media (max-width: 480px) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      order: -1;
    }

    .hero-graphic {
      width: 100%;
      max-width: 500px;
      height: 380px;
      background: linear-gradient(
        135deg,
        rgba(56, 120, 240, 0.1),
        rgba(255, 255, 255, 0.05)
      );
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1024px) {
        height: 340px;
      }

      @media (max-width: 768px) {
        height: 280px;
        max-width: 400px;
      }

      @media (max-width: 480px) {
        height: 240px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 200px;
        height: 200px;
        background: radial-gradient(
          circle,
          rgba(56, 120, 240, 0.1) 0%,
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
          rgba(255, 255, 255, 0.05) 0%,
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
        font-size: 1.1rem;
        padding: 25px;
        text-align: left;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        width: 90%;
        max-width: 400px;

        .line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 12px 0;
          line-height: 1.4;

          .comment {
            color: #4caf50;
          }

          .keyword {
            color: #ff9800;
          }

          .string {
            color: #e91e63;
          }

          .function {
            color: #3c83f6;
          }

          .operator {
            color: #ffffff;
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
    padding-top: 90px;
    padding-bottom: 30px;
    min-height: 90vh;

    .container {
      gap: 30px;
    }

    .texts {
      gap: 14px;
    }
  }

  /* Mobile specific adjustments */
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 20px;
    min-height: auto;
    padding-top: 100px;

    .container {
      gap: 40px;
    }

    .left {
      gap: 18px;
    }

    .texts {
      gap: 12px;
    }
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    padding-top: 90px;
    padding-bottom: 15px;
    min-height: auto;

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
      font-size: 1.2rem;
    }

    .btns button {
      height: 46px;
      font-size: 1rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
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
                <span className="keyword">const</span>{" "}
                <span className="function">developer</span>{" "}
                <span className="operator">=</span> {"{"}
              </div>
              <div className="line">
                &nbsp;&nbsp;name: <span className="string">"Aayan Mumtaz"</span>
                ,
              </div>
              <div className="line">
                &nbsp;&nbsp;role:{" "}
                <span className="string">"Full Stack Developer"</span>,
              </div>
              <div className="line">
                &nbsp;&nbsp;focus:{" "}
                <span className="string">"Building Digital Experiences"</span>
              </div>
              <div className="line">{"}"};</div>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
