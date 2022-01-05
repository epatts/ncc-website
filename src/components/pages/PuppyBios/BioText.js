import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const Details = ({ puppy }) => {
  return (
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
  );
};

export default Details;
