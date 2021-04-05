import React, { useEffect } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import styles from "../styles/pages/Login.module.scss";
import IllOne from "../components/icons/IllOne";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import Loader from "../components/global/Loader";

const registerSuccess = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const { redirect: registerRedirect } = userRedirect;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    } else if (!registerRedirect) {
      router.push("/login");
    }
  }, [user, registerRedirect, router]);

  if (!registerRedirect) {
    <Loader />;
  } else {
    return (
      <Box
        display={["block", "flex"]}
        alignItems={[null, "center"]}
        justifyContent={[null, "center"]}
        w="full"
        h="100vh"
        className={styles.pageBG}
        px={[4, null]}
        py={[6, null]}
      >
        <Box
          w={["full", "466px"]}
          bg="white"
          borderWidth="1px"
          borderColor="customDark"
          borderRadius="20px"
          px={["24px", "36px"]}
          pt={["32px", "59px"]}
          pb={["32px", "53px"]}
          className={styles.box}
        >
          <Center>
            <IllOne />
          </Center>
          <Text textStyle="h3" color="veryDark" mt={12} align="center">
            Your details have been recorded!
          </Text>
          <Text
            textStyle="p1Bold"
            color="black"
            align="center"
            mt={10}
            maxW="279px"
            w="full"
            mx="auto"
          >
            Please note that your entry is subject to approval. Your details
            have been submitted successfully and you will be get an email
            message notifying you of a decision shortly!
          </Text>
        </Box>
      </Box>
    );
  }
};

export default EnsureRedirect(registerSuccess);
