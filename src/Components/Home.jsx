import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 86vh;
`;

const Name = styled(motion.h1)`
  color: white;
  font-size: 52px;
  width: fit-content;
  margin-left: 60px;
`;

const SubHeading = styled(motion.h1)`
  color: white;
  font-size: 38px;
  width: fit-content;
  margin-left: 60px;

  span {
    color: #bb86fc;
  }
`;

const Home = () => {
  return (
    <Container>
      <div>
        <Name
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Aayan Mumtaz
        </Name>
        <SubHeading
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Front-End <span>Web</span> Developer
        </SubHeading>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="../../public/Icon.png" alt="Icon" />
      </motion.div>
    </Container>
  );
};

export default Home;
