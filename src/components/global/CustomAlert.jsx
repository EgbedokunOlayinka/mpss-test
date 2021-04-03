import {
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import styles from "../../styles/components/CustomInputBig.module.scss";

const CustomAlert = ({ status, rad, text }) => {
  return (
    <Alert status={status ? status : "error"} mt={6} borderRadius={rad && rad}>
      <AlertIcon />
      <AlertDescription textStyle="p2Bold" className={styles.error}>
        {text}
      </AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};

export default CustomAlert;
