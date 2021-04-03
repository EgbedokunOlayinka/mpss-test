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
import CustomAuthInput from "../components/global/CustomAuthInput";
import { useState } from "react";
import EnsureGuest from "../hooks/EnsureGuest";
import { connect } from "react-redux";
import { userLogin } from "../store/user/actions";
import CustomAlert from "../components/global/CustomAlert";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Login = ({ user: { loading, user, error }, userLogin }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    userLogin(values);
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown((value) => setPasswordShown(!value));
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
        <Heading as="h1" textStyle="h3" color="veryDark" align="center">
          Log in
        </Heading>

        <Text textStyle="p2Regular" color="black" align="center" mt={[2, 4]}>
          Welcome Back to the Directory
        </Text>

        <Box mt={["32px", "51px"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={8}>
              <CustomAuthInput
                name="email"
                type="email"
                placeholder="Email Address"
                customref={register}
                required={true}
                errors={errors}
              />

              <CustomAuthInput
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                customref={register}
                required={true}
                errors={errors}
                group={true}
                func={togglePassword}
                toggleValue={passwordShown}
              />

              {error && <CustomAlert rad="10px" text={error} />}

              <CustomButton
                isLoading={loading}
                disabled={!!errors.email || !!errors.password}
                type="submit"
              >
                Log in
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
    </Box>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { userLogin })(EnsureGuest(Login));
