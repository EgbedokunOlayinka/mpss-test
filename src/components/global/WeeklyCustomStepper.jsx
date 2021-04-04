import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Text,
} from "@chakra-ui/react";

const WeeklyCustomStepper = ({
  placeholder,
  name,
  customref,
  min,
  minuteMax,
  hourMax,
  length,
  data,
  setDaysData,
  hour,
  minute,
  tag,
  hourFunc,
  minFunc,
  index,
}) => {
  const minTwoDigits = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  return (
    <HStack spacing={1}>
      <NumberInput
        h="full"
        min={min}
        max={hourMax}
        value={minTwoDigits(hour)}
        onChange={(val) => hourFunc(val, index, tag)}
      >
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
          p={2}
        />
        <NumberInputStepper border="transparent">
          <NumberIncrementStepper
            color="greyTwo"
            border="transparent"
            fontSize="8px"
          />
          <NumberDecrementStepper
            color="greyTwo"
            border="transparent"
            fontSize="8px"
          />
        </NumberInputStepper>
      </NumberInput>

      <Text color="greyTwo" textStyle="p2Bold">
        :
      </Text>

      <NumberInput
        h="full"
        min={min}
        max={minuteMax}
        value={minTwoDigits(minute)}
        onChange={(val) => minFunc(val, index, tag)}
      >
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
          p={2}
        />
        <NumberInputStepper border="transparent">
          <NumberIncrementStepper
            color="greyTwo"
            border="transparent"
            fontSize="8px"
          />
          <NumberDecrementStepper
            color="greyTwo"
            border="transparent"
            fontSize="8px"
          />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  );
};

export default WeeklyCustomStepper;
