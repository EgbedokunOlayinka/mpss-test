import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Icon,
  Text,
} from "@chakra-ui/react";
import CustomInputBig from "./CustomInputBig";
import styles from "../../styles/pages/Login.module.scss";
import { MdErrorOutline } from "react-icons/md";
import spaceWord from "../../utils/spaceCamel";

const CustomAuthInput = ({
  required,
  name,
  title,
  customref,
  errors,
  type,
  placeholder,
  subtitle,
  group,
  func,
  toggleValue,
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
      <CustomInputBig
        type={type ? type : "text"}
        name={name}
        customref={customref}
        placeholder={placeholder ? placeholder : null}
        group={group && group}
        func={func && func}
        toggleValue={toggleValue}
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

export default CustomAuthInput;
