import {
  Input,
  InputGroup,
  InputRightElement,
  Center,
  Icon,
} from "@chakra-ui/react";
import styles from "../../styles/components/CustomInputBig.module.scss";
import PasswordIcon from "../icons/PasswordIcon";
import { FiEyeOff, FiEye } from "react-icons/fi";

const CustomInputBig = ({ toggleValue, func, group, customref, ...props }) => {
  return group ? (
    <InputGroup>
      <Input
        {...props}
        className={styles.custominput}
        borderColor="greyOne"
        borderRadius="10px"
        bg="white"
        _placeholder={{
          textStyle: "p2Regular",
          color: "#818796",
        }}
        h="54px"
        px={[4, 8]}
        ref={customref}
      />
      <InputRightElement
        onClick={func && func}
        children={
          <Center mt="16px" mr="16px">
            <Icon as={toggleValue ? FiEyeOff : FiEye} color="#818796" />
          </Center>
        }
      />
    </InputGroup>
  ) : (
    <Input
      className={styles.custominput}
      borderColor="greyOne"
      borderRadius="10px"
      bg="white"
      _placeholder={{
        textStyle: "p2Regular",
        color: "#818796",
      }}
      h="54px"
      px={[4, 8]}
      ref={customref}
      {...props}
    />
  );
};

export default CustomInputBig;
