import React from "react";
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
import CustomModalStepper from "./CustomModalStepper";

const TimeStep = ({ day }) => {
  return (
    <Grid templateColumns="2fr 1.5fr 1.5fr" gap={[4, 8]} justify="center">
      <Flex align="center" w="full" h="full">
        <Text textStyle="p2Regular" color="veryDark" align="left">
          {day}
        </Text>
      </Flex>
      <Box w="full" h="full">
        <CustomModalStepper
          min={0}
          max={24}
          placeholder="00:00"
          length="32px"
        />
      </Box>
      <Box w="full" h="full">
        <CustomModalStepper min={0} max={24} placeholder="00:00" />
      </Box>
    </Grid>
  );
};

const TimeStepper = () => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} color="veryDark" textStyle="p2Bold">
        Opening Hours
      </FormLabel>

      <Grid direction="column" gap={3}>
        <Grid templateColumns="2fr 1.5fr 1.5fr" gap={[4, 8]}>
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
        <TimeStep day="Monday" />
        <TimeStep day="Tuesday" />
        <TimeStep day="Wednesday" />
        <TimeStep day="Thursday" />
        <TimeStep day="Friday" />
        <TimeStep day="Saturday" />
        <TimeStep day="Sunday" />
      </Grid>
    </FormControl>
  );
};

export default TimeStepper;
