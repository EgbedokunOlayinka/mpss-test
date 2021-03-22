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
  password: yup.string().min(6).required(),
});

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    alert(values);
  };

  return (
    <Center w="full" h="100vh" className={styles.pageBG} px={[4, null]} py={[4, null]}>
      <Box
        w={["full", "466px"]}
        bg="white"
        borderWidth="1px"
        borderColor="customDark"
        borderRadius="20px"
        px={["24px", "36px"]}
        pt={['32px', '59px']}
        pb={['32px', '53px']}
        className={styles.box}
      >
        <Heading as="h1" textStyle="h3" color="veryDark" align="center">
          Log in
        </Heading>

        <Text textStyle="p2Regular" color="black" align="center" mt={4}>
          Welcome Back to the Directory
        </Text>

        <Box mt={['32px', '51px']}>
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
                <FormErrorMessage>
                  <Icon as={MdErrorOutline} mr={1} />
                  {errors?.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors?.password?.message}
                errortext={errors?.password?.message}
                isRequired
              >
                <CustomInputBig
                  customref={register}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <FormErrorMessage>
                  <Icon as={MdErrorOutline} mr={1} />
                  {errors?.password?.message}
                </FormErrorMessage>
              </FormControl>
              <CustomButton
                onClick={handleSubmit(onSubmit)}
                disabled={!!errors.email || !!errors.password}
                type="submit"
              >
                Log in
              </CustomButton>
            </VStack>
          </form>
        </Box>

        <Text textStyle="p2Regular" color="veryDark" mt={['32px', '51px']} align="center">
          Don't have an account?{" "}
          <NextLink href="/signup">
            <Link
              textStyle="p2Bold"
              color="customDark"
              _hover={{ opacity: "0.85", textTransform: "none" }}
            >
              Join the directory
            </Link>
          </NextLink>
        </Text>

        <Center>
          <NextLink href="/forgotpassword">
            <Link
              textStyle="p2Bold"
              color="customDark"
              mt={4}
              align="center"
              _hover={{ opacity: "0.85", textTransform: "none" }}
            >
              Forgot Password
            </Link>
          </NextLink>
        </Center>
      </Box>
    </Center>
  );
};

export default Login;
