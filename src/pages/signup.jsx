import NextLink from "next/link";
import React, { useState } from "react";
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
  Grid,
  Flex,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../styles/pages/Login.module.scss";
import CustomInputBig from "../components/global/CustomInputBig";
import CustomButton from "../components/global/CustomButton";
import { MdErrorOutline } from "react-icons/md";
import CustomAuthInput from "../components/global/CustomAuthInput";
import CustomModalSelect from "../components/global/CustomModalSelect";
import titles from "../data/titles.json";
import { FaCheck } from "react-icons/fa";
import { connect } from "react-redux";
import { userRegister } from "../store/user/actions";
import validateUrl from "../utils/validateUrl";
import TimezoneSelect from "../components/global/TimezoneSelect";
import EnsureGuest from "../hooks/EnsureGuest";
import CustomAlert from "../components/global/CustomAlert";

const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  organizationName: yup.string().required(),
  organizationWebsite: yup.string().required().matches(
    // /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    URL,
    "URL not valid"
  ),
  timeZone: yup.string().required(),
});

const Signup = ({ user: { loading }, userRegister }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    userRegister(values);
  };

  const [checkAgreed, setCheckAgreed] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown((value) => setPasswordShown(!value));
  };

  const noErrors =
    !!errors.email ||
    !!errors.password ||
    !!errors.firstName ||
    !!errors.lastName ||
    !!errors.organizationName ||
    !!errors.organizationWebsite ||
    !!errors.timeZone;

  return (
    <Box
      display={["block", "flex"]}
      alignItems={[null, "center"]}
      justifyContent={[null, "center"]}
      w="full"
      minH="100vh"
      className={styles.pageBG}
      px={[4, null]}
      py={[6, null]}
    >
      <Box
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
          Join Directory
        </Heading>

        <Text textStyle="p2Regular" color="black" align="center" mt={[2, 4]}>
          Let's get you started
        </Text>

        <Box mt={["32px", "51px"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={8}>
              <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8} w="full">
                <CustomAuthInput
                  name="firstName"
                  placeholder="First Name"
                  customref={register}
                  required={true}
                  errors={errors}
                />

                <CustomAuthInput
                  name="lastName"
                  placeholder="Last Name"
                  customref={register}
                  required={true}
                  errors={errors}
                />
              </Grid>

              <CustomAuthInput
                name="organizationName"
                placeholder="Organization Name"
                customref={register}
                required={true}
                errors={errors}
              />

              <CustomAuthInput
                name="organizationWebsite"
                placeholder="Organization Website"
                customref={register}
                required={true}
                errors={errors}
              />

              <TimezoneSelect
                name="timeZone"
                customref={register}
                required={true}
                errors={errors}
                data={titles}
                placeholder="Time Zone"
                styled={true}
                auth={true}
              />

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

              <CustomButton
                isLoading={loading}
                disabled={noErrors || !checkAgreed}
                type="submit"
              >
                Join Directory
              </CustomButton>
            </VStack>
          </form>
        </Box>

        <Center>
          <Flex align="center" mt={6}>
            <Box
              w={4}
              h={4}
              border="0.5px solid #27459C"
              borderRadius="3px"
              position="relative"
              onClick={() => setCheckAgreed((value) => setCheckAgreed(!value))}
            >
              {checkAgreed && (
                <Icon
                  as={FaCheck}
                  color="customDark"
                  position="absolute"
                  w="14px"
                  h="14px"
                />
              )}
            </Box>
            <Text ml={2} color="veryDark" textStyle="p3Regular">
              I agree to the Terms and Conditions and Privacy Policy
            </Text>
          </Flex>
        </Center>

        <Text
          textStyle="p2Regular"
          color="veryDark"
          mt={["32px", "51px"]}
          align="center"
        >
          Already have an account?{" "}
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

const mapStateToProps = (state) => ({
  user: state.userRegister,
});

export default connect(mapStateToProps, { userRegister })(EnsureGuest(Signup));
