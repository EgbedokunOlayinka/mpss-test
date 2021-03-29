import React, { useState } from "react";
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

const CustomModalTextarea = ({ required, name, title, customref, errors }) => {
  const [resize, setResize] = React.useState("none");

  return (
    <FormControl
      isInvalid={!!errors?.[name]?.message}
      errortext={errors?.[name]?.message}
      isRequired={required ? "true" : "false"}
    >
      <FormLabel htmlFor={name} color="veryDark" textStyle="p2Bold">
        {title}
      </FormLabel>

      <Textarea
        className={styles.custominput}
        borderColor="greyOne"
        borderRadius="7px"
        bg="white"
        resize={resize}
        ref={customref}
        name={name}
        h="120px"
        p={4}
      />
      <FormErrorMessage textStyle="p2Bold">
        <Icon as={MdErrorOutline} mr={1} />
        <Text className={styles.error}>
          {errors[name] && errors[name].message
            ? spaceWord(errors[name].message)
            : null}
        </Text>
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomModalTextarea;
