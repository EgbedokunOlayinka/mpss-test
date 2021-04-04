import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Icon,
  Text,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { MdErrorOutline } from "react-icons/md";
import spaceWord from "../../utils/spaceCamel";
import styles from "../../styles/components/CustomInputBig.module.scss";
import CustomInputSmall from "./CustomInputSmall";

const WeeklyTextarea = ({ title, name, value, index, func }) => {
  return (
    <FormControl
      //   isInvalid={!!errors?.[name]?.message}
      isRequired={true}
    >
      <FormLabel htmlFor={name} color="veryDark" textStyle="p2Bold">
        {title}
      </FormLabel>

      <Textarea
        className={styles.custominput}
        borderColor="greyOne"
        borderRadius="7px"
        bg="white"
        resize={"none"}
        name={name}
        h="120px"
        p={4}
        value={value && value}
        index={index && index}
        onChange={(e) => func(e.target.value, index)}
      />
    </FormControl>
  );
};

export default WeeklyTextarea;
