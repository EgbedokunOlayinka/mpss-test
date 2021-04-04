import React from "react";
import CustomInputSmall from "./CustomInputSmall";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import styles from "../../styles/components/CustomInputBig.module.scss";

const WeeklyInput = ({ title, name, index, func, value }) => {
  return (
    <FormControl
      //   isInvalid={!!errors?.tags?.message}
      isRequired={true}
    >
      <FormLabel htmlFor={name} color="veryDark" textStyle="p2Bold">
        {title}
      </FormLabel>
      <Input
        className={styles.custominput}
        borderColor="greyOne"
        borderRadius="7px"
        bg="white"
        _placeholder={{
          textStyle: "p2Regular",
          color: "#818796",
        }}
        h="42px"
        px={4}
        value={value && value}
        index={index && index}
        onChange={(e) => func(e.target.value, index)}
      />
    </FormControl>
  );
};

export default WeeklyInput;
