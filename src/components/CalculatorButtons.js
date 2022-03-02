import React from "react";
import { Text, Button } from "native-base";

export function CalculatorButton({ value }) {
  return (
    <Button
      width={16}
      height={16}
      bg="white"
      borderRadius={5}
      alignItems="center"
      justifyContent="center"
      _pressed={{ background: "primary.400" }}
      marginBottom={3}
    >
      <Text color="black" fontSize="3xl" fontWeight="bold" fontFamily="ComicNeue">
        {value}
      </Text>
    </Button>
  );
}

export function CalculatorOperator({ value }) {
  return (
    <Button
      width={16}
      height={16}
      bg="gray.400"
      borderRadius={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      _pressed={{ background: "gray.500" }}
      marginBottom={3}
    >
      {value}
    </Button>
  );
}