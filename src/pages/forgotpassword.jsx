import NextLink from "next/link";
import {
  Box,
  Text,
  Center,
  Heading,
  FormControl,
  FormErrorMessage,
  VStack,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../styles/pages/Login.module.scss";
import CustomInputBig from "../components/global/CustomInputBig";
import CustomButton from "../components/global/CustomButton";
import { MdErrorOutline } from "react-icons/md";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values));
  };

  return (
    <Box
      display={["block", "flex"]}
      alignItems={[null, "center"]}
      justifyContent={[null, "center"]}
      w="full"
      h="100vh"
      className={styles.pageBG}
      px={[4, null]}
      py={[4, null]}
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
          <Heading
            as="h1"
            textStyle="h3"
            color="veryDark"
            align="center"
            w={["full", "185px"]}
          >
            Forgot Password?
          </Heading>
        </Center>

        <Center>
          <Text
            textStyle="p2Regular"
            color="black"
            align="center"
            mt={[2, 4]}
            w={["full", "283px"]}
          >
            Please enter the email address linked to your account so we can send
            you pasword reset instructions
          </Text>
        </Center>

        <Box mt={["32px", "51px"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={8}>
              <FormControl
                isInvalid={!!errors?.email?.message}
                errortext={errors?.email?.message}
                isRequired
              >
                <CustomInputBig
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  customref={register}
                />
                <FormErrorMessage textStyle="p2Bold">
                  <Icon as={MdErrorOutline} mr={1} />
                  <Text className={styles.error}>{errors?.email?.message}</Text>
                </FormErrorMessage>
              </FormControl>

              <CustomButton disabled={!!errors.email} type="submit">
                Submit Email Address
              </CustomButton>
            </VStack>
          </form>
        </Box>

        <Text
          textStyle="p2Regular"
          color="veryDark"
          mt={["32px", "51px"]}
          align="center"
        >
          Remember your password?{" "}
          <NextLink href="/login">
            <Link
              textStyle="p2Bold"
              color="customDark"
              _hover={{ opacity: "0.85", textTransform: "none" }}
            >
              Log In
            </Link>
          </NextLink>
        </Text>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
