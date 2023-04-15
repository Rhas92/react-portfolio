import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
 // Implemented structure of each card

  return (
    <VStack
    bg="white"
    borderRadius="15px">
      <Image src={imageSrc} alt={title} borderRadius="15px"/>
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading color="black" as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="black" fontSize="lg">
          {description}
        </Text>
        <HStack color="black" spacing={2} alignItems="center" fontSize={"lg"}>
          <p>See More</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
