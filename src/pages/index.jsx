import { Center, VStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../styles/pages/Login.module.scss";

const Index = () => {
  return (
    <Center w="full" h="100vh" className={styles.pageBG} px={[4, null]}>
      <VStack>
        <Center>
          <NextLink href="/login">
            <Link
              textStyle="p2Bold"
              color="customDark"
              mt={4}
              align="center"
              _hover={{ opacity: "0.85", textTransform: "none" }}
            >
              Login Page
            </Link>
          </NextLink>
        </Center>

        <Center>
          <NextLink href="/signup">
            <Link
              textStyle="p2Bold"
              color="customDark"
              mt={4}
              align="center"
              _hover={{ opacity: "0.85", textTransform: "none" }}
            >
              Signup Page
            </Link>
          </NextLink>
        </Center>

        <Center>
          <NextLink href="/forgotpassword">
            <Link
              textStyle="p2Bold"
              color="customDark"
              mt={4}
              align="center"
              _hover={{ opacity: "0.85", textTransform: "none" }}
            >
              Forgot Password Page
            </Link>
          </NextLink>
        </Center>

        <Center>
          <NextLink href="/home">
            <Link
              textStyle="p2Bold"
              color="customDark"
              mt={4}
              align="center"
              _hover={{ opacity: "0.85", textTransform: "none" }}
            >
              Inner Pages
            </Link>
          </NextLink>
        </Center>
      </VStack>
    </Center>
  );
};

export default Index;
