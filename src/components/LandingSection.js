import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "./../images/Mandonguilla.jpeg";  

const greeting = "Hello, I am Ramón!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
        >
    <VStack spacing={6}>
      <Avatar size="2xl" name="Ramón" src={avatar}></Avatar>
      <Heading as="h5"size="sm">
        {greeting}
      </Heading>
      <Heading as="h1"size="4x1">
        {bio1} {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
