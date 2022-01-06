import React, { useState } from "react";
import "../../HeroSection.css";

import {
  FormControl,
  FormLabel,
  Image,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";

function PuppyBio({ puppy }) {
  return (
    <>
      <Container
        maxW="30%"
        paddingTop="2%"
        paddingBottom="2%"
      >
        <Flex
          alignContent="center"
          // flexWrap="wrap"
          justifyContent="space-evenly"
        >
          <VStack minW={400} h="full" p={10} spacing={6}>
            <Text className={puppy.available ? "available" : "not-available"}>
              {puppy.available ? "Available" : "Not available"}
            </Text>
            <Heading className="bio_name" size="2xl">
              {puppy.name}
            </Heading>
            <Text className="bio_desc" >{puppy.description}</Text>
            <Image src={puppy.img} alt={puppy.name} borderRadius="5%" />
            {/* <Button
                size="lg"
                backgroundColor="grey"
                color="white"
                minW="10%"
                w="50%"
              >
                See more photos
              </Button> */}
            {puppy.available ? (
              <Button
                size="lg"
                backgroundColor="red"
                color="white"
                minW="10%"
              >
                Contact Us
              </Button>
            ) : null}
          </VStack>
        </Flex>
      </Container>
    </>
  );
}

export default PuppyBio;
