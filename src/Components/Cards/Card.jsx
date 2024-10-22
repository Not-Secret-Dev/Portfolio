import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MyCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 240px;

  .image {
    outline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100px;
  }

  .title {
    outline: auto;
    width: 100%;
    text-align: center;
  }

  .desc {
    outline: auto;
    width: 100%;
    height: 115px;
    display: grid;
    place-items: center;
    text-align: center;
    font-size: medium;
  }
`;

const Card = (props) => {
  return (
    <MyCard
      initial={{x: 50}}
      animate={{x: 0}}
      transition={{duration: 1}}
    >
      <div className="image">
        <img src={props.image} alt="image" width="200" />
      </div>
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
    </MyCard>
  );
};

export default Card;
