import React from "react";
import { FormControl, FormLabel, Select, Text, Box } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import styles from "../../styles/components/CustomModalSelect.module.scss";

const WeeklySelect = ({
  title,
  data,
  func,
  value,
  index,
  styled,
  placeholder,
}) => {
  return (
    <FormControl
      //   isInvalid={!!errors?.[name]?.message}
      isRequired={true}
    >
      {title && (
        <FormLabel htmlFor={name} color="veryDark" textStyle="p2Bold">
          {title}
        </FormLabel>
      )}

      <Select
        icon={<MdArrowDropDown />}
        name={name}
        h="42px"
        borderRadius="7px"
        borderColor="greyOne"
        bg="white"
        placeholder={placeholder ? placeholder : null}
        color={styled && "greyTwo"}
        textStyle={styled && "p2Regular"}
        value={value && value}
        index={index && index}
        onChange={(e) => func(e.target.value, index)}
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

export default WeeklySelect;
