import React from "react";
import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import WeeklyCustomStepper from "./WeeklyCustomStepper";

const WeeklyTimeStep = ({
  event,
  index,
  handleHourChange,
  handleMinuteChange,
}) => {
  return (
    <Grid templateColumns=".5fr 1fr 1fr" gap={4} justify="center">
      <Flex align="center" w="full" h="full">
        <Text textStyle="p2Regular" color="veryDark" align="left">
          Duration
        </Text>
      </Flex>
      <Box w="full" h="full">
        <WeeklyCustomStepper
          min={0}
          minuteMax={59}
          hourMax={24}
          placeholder="00"
          length="32px"
          data={event}
          hourFunc={handleHourChange}
          minFunc={handleMinuteChange}
          index={index}
          hour={event.openingHour}
          minute={event.openingMinute}
          tag="opening"
        />
      </Box>
      <Box w="full" h="full">
        <WeeklyCustomStepper
          min={0}
          minuteMax={59}
          hourMax={24}
          placeholder="00"
          length="32px"
          data={event}
          hourFunc={handleHourChange}
          minFunc={handleMinuteChange}
          hour={event.closingHour}
          minute={event.closingMinute}
          tag="closing"
          index={index}
        />
      </Box>
    </Grid>
  );
};

const WeeklyTime = ({ event, index, handleHourChange, handleMinuteChange }) => {
  return (
    <Grid direction="column" gap={3}>
      <Grid templateColumns=".5fr 1fr 1fr" gap={[4, 8]}>
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
      <WeeklyTimeStep
        event={event}
        index={index}
        handleHourChange={handleHourChange}
        handleMinuteChange={handleMinuteChange}
      />
    </Grid>
  );
};

export default WeeklyTime;
