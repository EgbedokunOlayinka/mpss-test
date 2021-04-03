import React from "react";
import { FormControl, FormLabel, Select, Text, Box } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import styles from "../../styles/components/CustomModalSelect.module.scss";
import timezones from "google-timezones-json";

const data = Object.values(timezones);

const TimezoneSelect = ({
  required,
  name,
  title,
  customref,
  errors,
  subtitle,
  placeholder,
  styled,
  auth,
}) => {
  return (
    <FormControl
      isInvalid={!!errors?.[name]?.message}
      errortext={errors?.[name]?.message}
      isRequired={required ? "true" : "false"}
    >
      {title && (
        <FormLabel
          htmlFor={name}
          color="veryDark"
          textStyle="p2Bold"
          mb={subtitle && 0}
          pb={subtitle && 0}
        >
          {title}
        </FormLabel>
      )}

      {subtitle && (
        <Text color="greyTwo" textStyle="p3Regular" mb={2}>
          {subtitle}
        </Text>
      )}

      <Select
        icon={<MdArrowDropDown />}
        name={name}
        ref={customref}
        h={auth ? "54px" : "42px"}
        borderRadius={auth ? "10px" : "7px"}
        borderColor="greyOne"
        bg="white"
        placeholder={placeholder ? placeholder : null}
        color={styled && "greyTwo"}
        textStyle={styled && "p2Regular"}
      >
        {data.map((item, index) => (
          <option
            key={index}
            value={item}
            className={styled ? styles.option : null}
          >
            {item}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimezoneSelect;
