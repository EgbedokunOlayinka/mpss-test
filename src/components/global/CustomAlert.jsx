import {
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  Box,
} from "@chakra-ui/react";
import styles from "../../styles/components/CustomInputBig.module.scss";
import { useState } from "react";

const CustomAlert = ({ status, rad, text }) => {
  const [shown, setShown] = useState(true);

  return (
    <Alert
      status={status ? status : "error"}
      mt={6}
      borderRadius={rad && rad}
      w="full"
    >
      <AlertIcon />
      <AlertDescription textStyle="p2Bold" className={styles.error}>
        {text}
      </AlertDescription>
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        size="sm"
        onClick={() => setShown(false)}
      />
    </Alert>
  );
};

export default CustomAlert;
