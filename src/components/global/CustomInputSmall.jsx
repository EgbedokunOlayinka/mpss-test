import { Input } from "@chakra-ui/react";
import styles from "../../styles/components/CustomInputBig.module.scss";

const CustomInputSmall = ({ customref, ...props }) => {
  return (
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
      ref={customref && customref}
      {...props}
    />
  );
};

export default CustomInputSmall;
