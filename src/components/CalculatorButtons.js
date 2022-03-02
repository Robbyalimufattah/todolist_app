import React from "react";
import { Text, Button } from "native-base";

export function CalculatorButton({ value, col }) {
  return (
    <Button
      width={16}
      flex={col}
      height={16}
      bg="gray.800"
      borderRadius={5}
      alignItems="center"
      justifyContent="center"
      _pressed={{ background: "gray.400" }}
      
      marginBottom={3}
    >
      <Text color="#fff" fontSize="3xl" fontWeight="bold" fontFamily="ComicNeue">
        {value}
      </Text>
    </Button>
  );
}

export function CalculatorOperator({ value, col }) {
  return (
    <Button 
      width={16}
      flex={col}
      height={16}
      bg="orange.400"
      borderRadius={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      _pressed={{ background: "orange.200" }}
      marginBottom={3}
    >
      {value}
    </Button>
  );
}

export function CalculatorDecimal({ value, col }) {
    return (
      <Button
        width={16}
        flex={col}
        height={16}
        bg="gray.500"
        borderRadius={5}
        alignItems="center"
        justifyContent="center"
        _pressed={{ background: "white" }}
        
        marginBottom={3}
      >
        <Text color="black" fontSize="3xl" fontWeight="bold" fontFamily="ComicNeue">
          {value}
        </Text>
      </Button>
    );
  }