import React from "react";
import "../../HeroSection.css";
import BioText from "./BioText";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  FormControl,
  FormLabel,
  Input,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const PuppyBio = ({ puppy }) => (
  <>
    <Container maxW="container.xl" p={0}>
      <HStack>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Text color={puppy.available ? "green" : "red"}>
              {puppy.available ? "Available" : "Not available"}
            </Text>
            <Heading size="2xl">{puppy.name}</Heading>
            <Text>{puppy.description}</Text>
          </VStack>
          {puppy.available ? (
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={2}>
                <Button size="lg" w="full">
                  Contact Us
                </Button>
              </GridItem>
            </SimpleGrid>
          ) : null}
        </VStack>

        <AliceCarousel
          items={puppy.data}
          responsive={true}
          autoPlayInterval={4000}
          autoPlayDirection="ltr"
          autoPlay={true}
          infinite={true}
          fadeOutAnimation={true}
          disableAutoPlayOnAction={true}
        />
      </HStack>
    </Container>
  </>
);

export default PuppyBio;
