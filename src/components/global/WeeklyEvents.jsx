import React, { useState, useEffect } from "react";
import { Text, VStack, Box, IconButton } from "@chakra-ui/react";
import WeeklyInput from "./WeeklyInput";
import CustomModalSelect from "./CustomModalSelect";
import days from "../../data/days.json";
import WeeklyTextarea from "./WeeklyTextarea";
import WeeklyTime from "./WeeklyTime";
import { AddIcon, DeleteIcon, CloseIcon } from "@chakra-ui/icons";
import WeeklySelect from "./WeeklySelect";

const WeeklyEvents = ({
  setTotalEvents,
  getEvents,
  toSubmitEvents,
  setToSubmitEvents,
}) => {
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    const newEvent = {
      day: "",
      title: "",
      description: "",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    };
    setEvents((events) => [...events, newEvent]);
  };

  const removeEvent = (index) => {
    setEvents((events) => {
      const newArr = [...events];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  const handleTitleChange = (val, index) => {
    setEvents((events) => {
      let newArr = [...events];
      newArr[index].title = val;

      return newArr;
    });
  };

  const handleDescChange = (val, index) => {
    setEvents((events) => {
      let newArr = [...events];
      newArr[index].description = val;

      return newArr;
    });
  };

  const handleDayChange = (val, index) => {
    setEvents((events) => {
      let newArr = [...events];
      newArr[index].day = val;

      return newArr;
    });
  };

  const handleHourChange = (val, index, tag) => {
    if (tag === "opening") {
      setEvents((events) => {
        const newArr = [...events];
        newArr[index].openingHour = val;
        return newArr;
      });
    } else if (tag === "closing") {
      setEvents((events) => {
        const newArr = [...events];
        newArr[index].closingHour = val;
        return newArr;
      });
    }
  };

  const handleMinuteChange = (val, index, tag) => {
    if (tag === "opening") {
      setEvents((events) => {
        const newArr = [...events];
        newArr[index].openingMinute = val;
        return newArr;
      });
    } else if (tag === "closing") {
      setEvents((events) => {
        const newArr = [...events];
        newArr[index].closingMinute = val;
        return newArr;
      });
    }
  };

  if (toSubmitEvents) {
    getEvents(events);
  }

  useEffect(() => {
    setToSubmitEvents(false);
  }, []);

  return (
    <Box position="relative" pb={events.length === 0 ? 0 : 10}>
      <Text color="veryDark" textStyle="p2Bold" mb={2}>
        Weekly Events
      </Text>

      <VStack spacing={4}>
        {events.map((event, index) => (
          <VStack
            align="start"
            justify="start"
            spacing={4}
            key={index}
            borderColor="greyOne"
            borderWidth="1px"
            borderRadius="7px"
            px={4}
            pt={8}
            pb={4}
            position="relative"
          >
            <WeeklySelect
              name={String(Math.random())}
              required={true}
              data={days}
              placeholder="Day of the week"
              styled={true}
              title="Day"
              value={event.day}
              index={index}
              func={handleDayChange}
            />

            <WeeklyInput
              title="Title"
              name={String(Math.random())}
              value={event.title}
              index={index}
              func={handleTitleChange}
            />
            <WeeklyTextarea
              title="Description"
              name={String(Math.random())}
              value={event.description}
              index={index}
              func={handleDescChange}
            />
            <WeeklyTime
              event={event}
              index={index}
              handleHourChange={handleHourChange}
              handleMinuteChange={handleMinuteChange}
            />

            <IconButton
              aria-label="Remove Event"
              icon={<CloseIcon />}
              position="absolute"
              _hover={{ opacity: 0.85 }}
              right="12px"
              top="-8px"
              borderRadius="full"
              size="xs"
              onClick={() => removeEvent(index)}
            />
          </VStack>
        ))}
      </VStack>

      <IconButton
        aria-label="Add Event"
        icon={<AddIcon />}
        position="absolute"
        _hover={{ opacity: 0.85 }}
        right="0px"
        bottom="0px"
        bg="customDark"
        color="white"
        borderRadius="full"
        size="sm"
        onClick={() => addEvent()}
      />
    </Box>
  );
};

export default WeeklyEvents;
