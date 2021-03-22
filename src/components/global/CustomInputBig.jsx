import { Input } from "@chakra-ui/react";
import styles from "../../styles/components/CustomInputBig.module.scss";

const CustomInputBig = ({ customref, ...props }) => {
  return (
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
