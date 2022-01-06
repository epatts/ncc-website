import React from "react";
import PuppyBio from "./HeroSection";
import { puppies } from "./Data";

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

const PuppyBios = () => (
  <>
    <Container maxW="full" maxH="full" paddingTop="2%" paddingBottom="2%">
      <Flex alignContent="center" flexWrap="wrap" justifyContent="center">
        {puppies.map((puppy) =>
          puppy.available == true ? <PuppyBio puppy={puppy} /> : null
        )}
        {puppies.map((puppy) =>
          puppy.available == false ? <PuppyBio puppy={puppy} /> : null
        )}
      </Flex>
    </Container>
  </>
);

export default PuppyBios;
