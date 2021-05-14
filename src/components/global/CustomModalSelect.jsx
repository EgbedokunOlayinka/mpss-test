import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Text,
  Box,
  Icon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdArrowDropDown, MdErrorOutline } from "react-icons/md";
import styles from "../../styles/components/CustomModalSelect.module.scss";
import logstyles from "../../styles/pages/Login.module.scss";
import spaceWord from "../../utils/spaceCamel";

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
            key={item.id ? item.id : index}
            value={item.title}
            className={styled ? styles.option : null}
          >
            {item.title}
          </option>
        ))}
      </Select>
      <FormErrorMessage textStyle="p2Bold">
        <Icon as={MdErrorOutline} mr={1} />
        <Text className={logstyles.error}>
          {errors[name] && errors[name].message
            ? spaceWord(errors[name].message)
            : null}
        </Text>
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomModalSelect;
