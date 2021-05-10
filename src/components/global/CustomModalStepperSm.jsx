import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Text,
} from "@chakra-ui/react";

const CustomModalStepperSm = ({
  placeholder,
  name,
  customref,
  min,
  minuteMax,
  hourMax,
  length,
  data,
  setDaysData,
  setHours,
  hour,
  minute,
  tag,
}) => {
  const handleChangeHour = (val) => {
    setDaysData((daysData) => {
      let newArr = [...daysData];
      newArr.forEach((item) => {
        if (item.text === data.text) {
          if (tag === "opening") {
            item.openingHour = val;
          } else if (tag === "closing") {
            item.closingHour = val;
          }
        }
      });

      // console.log(newArr);

      return newArr;
    });
    // setHours((daysData) => {
    //   let newArr = [...daysData];
    //   newArr.forEach((item) => {
    //     if (item.text === data.text) {
    //       if (tag === "opening") {
    //         item.openingHour = val;
    //       } else if (tag === "closing") {
    //         item.closingHour = val;
    //       }
    //     }
    //   });

    //   return newArr;
    // });
  };

  const handleChangeMinute = (val) => {
    setDaysData((daysData) => {
      let newArr = [...daysData];
      newArr.forEach((item) => {
        if (item.text === data.text) {
          if (tag === "opening") {
            item.openingMinute = val;
          } else if (tag === "closing") {
            item.closingMinute = val;
          }
        }
      });

      // console.log(newArr);

      return newArr;
    });
    // setHours((daysData) => {
    //   let newArr = [...daysData];
    //   newArr.forEach((item) => {
    //     if (item.text === data.text) {
    //       if (tag === "opening") {
    //         item.openingMinute = val;
    //       } else if (tag === "closing") {
    //         item.closingMinute = val;
    //       }
    //     }
    //   });

    //   return newArr;
    // });
  };

  const minTwoDigits = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  return (
    <HStack spacing={1}>
      <NumberInput
        h="full"
        min={min}
        max={hourMax}
        value={hour}
        onChange={(val) => handleChangeHour(val)}
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
        value={minute}
        onChange={(val) => handleChangeMinute(val)}
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

export default CustomModalStepperSm;
