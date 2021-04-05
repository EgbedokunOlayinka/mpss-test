import React, { useEffect } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import styles from "../styles/pages/Login.module.scss";
import IllTwo from "../components/icons/IllTwo";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import Loader from "../components/global/Loader";

const passwordReset = () => {
  const userForgot = useSelector((state) => state.userForgot);
  const { redirect: forgotRedirect, mail } = userForgot;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    } else if (!forgotRedirect) {
      router.push("/login");
    }
  }, [user, forgotRedirect, router]);

  if (!forgotRedirect) {
    return <Loader />;
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
            <IllTwo />
          </Center>
          <Text textStyle="h3" color="veryDark" mt={12} align="center">
            An email is on the way!
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
            Please check{" "}
            <Text as="span" textStyle="p1Bold" color="customDark">
              {mail}
            </Text>{" "}
            for instructions on how to reset your password
          </Text>
        </Box>
      </Box>
    );
  }
};

export default passwordReset;
