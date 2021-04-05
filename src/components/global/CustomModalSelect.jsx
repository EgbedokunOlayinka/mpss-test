import React from "react";
import { FormControl, FormLabel, Select, Text, Box } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import styles from "../../styles/components/CustomModalSelect.module.scss";

const CustomModalSelect = ({
  required,
  name,
  title,
  customref,
  errors,
  data,
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
          mb={!subtitle && 2}
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
        ref={customref && customref}
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
            value={item.title}
            className={styled ? styles.option : null}
          >
            {item.title}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomModalSelect;
