import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const CustomModalStepper = ({
  placeholder,
  name,
  customref,
  min,
  max,
  length,
}) => {
  return (
    <NumberInput h="full" min={min} max={max}>
      <NumberInputField
        h={length ? length : "full"}
        borderColor="greyOne"
        borderRadius="7px"
        bg="white"
        color="greyTwo"
        textStyle="p2Regular"
        placeholder={placeholder ? placeholder : null}
        name={name ? name : null}
        ref={customref ? customref : null}
      />
      <NumberInputStepper border="transparent">
        <NumberIncrementStepper
          color="greyTwo"
          border="transparent"
          fontSize="10px"
        />
        <NumberDecrementStepper
          color="greyTwo"
          border="transparent"
          fontSize="10px"
        />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default CustomModalStepper;
