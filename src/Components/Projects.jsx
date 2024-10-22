import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./Cards/Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 86vh;
`;

const ProjectsDiv = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 70vw;
`;

const Project = styled(motion.div)`
  display: flex;
  margin: 12px;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    scale: 1.02;
  }
`;

const ProjectsArray = [
  {
    image: "src/Components/Cards/Card Assets/ChatBot.png",
    title: "Gemini Clone",
    desc: "A simple AI made with pure HTML, CSS, and JS and the Google Generative AI API.",
  },
  {
    image: "src/Components/Cards/Card Assets/FitFeast.png",
    title: "Fit Feast",
    desc: "A website made for foodies to order and enjoy delicious food at very reasonable prices.",
  },
  {
    image: "src/Components/Cards/Card Assets/FoodyMoody.png",
    title: "Foody Moody",
    desc: "A website made for foodies to order and enjoy delicious food at very reasonable prices.",
  },
  {
    image: "src/Components/Cards/Card Assets/DiceGame.png",
    title: "Dice Game",
    desc: "A fun dice-rolling game made with React JS and styled components.",
  },
  {
    image: "src/Components/Cards/Card Assets/TicTacToe.png",
    title: "Tic Tac Toe",
    desc: "A classic Tic Tac Toe game with sleek design, built using HTML, CSS, and JavaScript.",
  },
  {
    image: "src/Components/Cards/Card Assets/MoviesSearchingApp.png",
    title: "Movies Searcher",
    desc: "An interactive app for searching movies, developed with HTML, CSS, and JS.",
  },
  {
    image: "src/Components/Cards/Card Assets/MusicPlayer.png",
    title: "Musificator",
    desc: "A modern music player with custom controls, built with HTML, CSS, and JavaScript.",
  },
];

const Projects = () => {
  return (
    <>
      <motion.h1
        style={{
          fontSize: "38px",
          marginBottom: "18px",
          textAlign: "center",
          color: "white",
        }}
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <Container>
        <ProjectsDiv>
          {ProjectsArray.map((project, index) => (
            <Project
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Card
                image={project.image}
                title={project.title}
                desc={project.desc}
              />
            </Project>
          ))}
        </ProjectsDiv>
      </Container>
    </>
  );
};

export default Projects;
