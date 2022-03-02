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
  CalculatorOperator, CalculatorDecimal
} from "../components/CalculatorButtons";

export default function CalculatorBase() {
  return (
    <Box height="full" bg="black" paddingTop={30} paddingX={4}>
      <Heading
        fontFamily="ComicNeue"
        size="2xl"
        fontWeight="bold"
        color="white"
        paddingY={5}
      >
        Waysmath
      </Heading>

      <Box
        marginBottom={8}
        bg="black"
        height={20}
        borderRadius={10}
        paddingX={5}
        justifyContent="center"
        borderColor="white"
      >
        <Text
          color="white"
          fontSize="3xl"
          fontWeight="bold"
          fontFamily="ComicNeue"
        >
          1
        </Text>
      </Box>

      <VStack>
        <HStack justifyContent="space-between" space={3}>
        <CalculatorDecimal col={1}
            value={
              <Text fontSize="2xl" fontWeight="bold">
                AC
              </Text>
            }
          />
          <CalculatorDecimal col={1}
            value={
              <Text fontSize="2xl" fontWeight="bold">
                +/-
              </Text>
            }
          />
          <CalculatorDecimal col={1} 
            value={
                <Text fontSize="2xl" fontWeight="bold">
                    %
                </Text>} />
          <CalculatorOperator col={1} 
            value={
                <Text fontSize="2xl" fontWeight="bold">
                    /
                </Text>} />
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={7} />
          <CalculatorButton col={1} value={8} />
          <CalculatorButton col={1} value={9} />
          <CalculatorOperator col={1}
            value={
              <Text fontSize="2xl" fontWeight="bold">
                X
              </Text>
            }
          />
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={4} />
          <CalculatorButton col={1} value={5} />
          <CalculatorButton col={1} value={6} />
          <CalculatorOperator col={1}
            value={
              <Text fontSize="2xl" fontWeight="bold">
                -
              </Text>
            }
          />
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={1} />
          <CalculatorButton col={1} value={2} />
          <CalculatorButton col={1} value={3} />
          <CalculatorOperator col={1}
            value={
              <Text fontSize="2xl" fontWeight="bold">
                +
              </Text>
            }
          />
        </HStack>

        <HStack justifyContent="space-between" space={3}>
            <CalculatorButton col={3} value={0} />
            <CalculatorButton col={1} value={" , "} />
            <CalculatorOperator col={1}
            value={
              <Text fontSize="2xl" fontWeight="bold">
                +
              </Text>
            }
          />
        </HStack>
      </VStack>
    </Box>
  );
}