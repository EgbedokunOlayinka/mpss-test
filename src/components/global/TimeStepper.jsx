import React, { useState } from "react";
import {
  FormLabel,
  FormControl,
  Grid,
  Box,
  VStack,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
// import CustomModalStepper from "./CustomModalStepper";
import CustomModalStepperSm from "./CustomModalStepperSm";

const TimeStep = ({ data, setDaysData }) => {
  return (
    <Grid templateColumns="1fr 1fr 1fr" gap={4} justify="center">
      <Flex align="center" w="full" h="full">
        <Text textStyle="p2Regular" color="veryDark" align="left">
          {data.text}
        </Text>
      </Flex>
      <Box w="full" h="full">
        <CustomModalStepperSm
          min={0}
          minuteMax={59}
          hourMax={24}
          placeholder="00"
          length="32px"
          data={data}
          setDaysData={setDaysData}
          hour={data.openingHour}
          minute={data.openingMinute}
          tag="opening"
        />
      </Box>
      <Box w="full" h="full">
        <CustomModalStepperSm
          min={0}
          minuteMax={59}
          hourMax={24}
          placeholder="00"
          length="32px"
          data={data}
          setDaysData={setDaysData}
          hour={data.closingHour}
          minute={data.closingMinute}
          tag="closing"
        />
      </Box>
    </Grid>
  );
};

const TimeStepper = () => {
  const daysArray = [
    {
      text: "Monday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Tuesday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Wednesday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Thursday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Friday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Saturday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Sunday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
  ];
  const [daysData, setDaysData] = useState([
    {
      text: "Monday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Tuesday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Wednesday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Thursday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Friday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Saturday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Sunday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
  ]);

  return (
    <FormControl>
      <FormLabel htmlFor={name} color="veryDark" textStyle="p2Bold">
        Opening Hours
      </FormLabel>

      <Grid direction="column" gap={3}>
        <Grid templateColumns="1fr 1fr 1fr" gap={[4, 8]}>
          <Box w="full" h="full"></Box>
          <Box w="full" h="full">
            <Text textStyle="p3Regular" color="greyTwo" align="center">
              Opening Time
            </Text>
          </Box>
          <Box w="full" h="full">
            <Text textStyle="p3Regular" color="greyTwo" align="center">
              Closing Time
            </Text>
          </Box>
        </Grid>
        {daysData.map((item) => {
          return (
            <TimeStep key={item.text} data={item} setDaysData={setDaysData} />
          );
        })}
      </Grid>
    </FormControl>
  );
};

export default TimeStepper;
