import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Icon,
  Text,
} from "@chakra-ui/react";
import CustomInputSmall from "./CustomInputSmall";
import styles from "../../styles/pages/Login.module.scss";
import { MdErrorOutline } from "react-icons/md";
import spaceWord from "../../utils/spaceCamel";

const CustomModalInput = ({
  required,
  name,
  title,
  customref,
  errors,
  placeholder,
  subtitle,
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
      <CustomInputSmall
        type="text"
        name={name}
        customref={customref}
        placeholder={placeholder ? placeholder : null}
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

export default CustomModalInput;
