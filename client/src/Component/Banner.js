import React from "react";
import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  text-transform: uppercase;
  text-shadow: 2px 2px red ;
  color: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  color: black;
  background: #ffffff;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>Welcome to JALA Academy</Heading>
      <SubHeading>
        Do you want to Learn Selenium Automation completely with Practical
        Scenarios in 7 Days?
      </SubHeading>
    </Image>
  );
};

export default Banner;
