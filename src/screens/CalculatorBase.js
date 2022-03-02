import React from "react";
import {
  Text,
  Heading,
  Box,
  HStack,
  VStack,
  AddIcon,
  MinusIcon,
} from "native-base";
import {
  CalculatorButton,
  CalculatorOperator,
} from "../components/CalculatorButtons";

export default function CalculatorBase() {
  return (
    <Box height="full" bg="primary.900" paddingTop={30} paddingX={4}>
      <Heading
        fontFamily="ComicNeue"
        size="md"
        fontWeight="normal"
        color="white"
        paddingY={5}
      >
        Display
      </Heading>

      <Box
        marginBottom={8}
        bg="white"
        height={20}
        borderRadius={10}
        paddingX={5}
        justifyContent="center"
        borderColor="white"
      >
        <Text
          color="black"
          fontSize="3xl"
          fontWeight="bold"
          fontFamily="ComicNeue"
        >
          1
        </Text>
      </Box>

      <VStack>
        <HStack justifyContent="space-between">
          <CalculatorButton value={1} />
          <CalculatorButton value={2} />
          <CalculatorOperator value={<AddIcon size={5} />} />
          <CalculatorOperator value={<MinusIcon size={5} />} />
        </HStack>
        <HStack justifyContent="space-between">
          <CalculatorButton value={3} />
          <CalculatorButton value={4} />
          <CalculatorOperator
            value={
              <Text fontSize="2xl" fontWeight="bold">
                /
              </Text>
            }
          />
          <CalculatorOperator
            value={
              <Text fontSize="2xl" fontWeight="bold">
                *
              </Text>
            }
          />
        </HStack>
        <HStack justifyContent="space-between">
          <CalculatorButton value={5} />
          <CalculatorButton value={6} />
          <CalculatorOperator
            value={
              <Text fontSize="2xl" fontWeight="bold">
                %
              </Text>
            }
          />
          <CalculatorOperator
            value={
              <Text fontSize="2xl" fontWeight="bold">
                =
              </Text>
            }
          />
        </HStack>
        <HStack justifyContent="space-between">
          <CalculatorButton value={7} />
          <CalculatorButton value={8} />
          <CalculatorButton value={9} />
          <CalculatorButton value={0} />
        </HStack>
      </VStack>
    </Box>
  );
}