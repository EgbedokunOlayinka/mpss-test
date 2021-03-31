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
  Grid,
  Flex,
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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  organizationName: yup.string().required(),
  organizationWebsite: yup.string().required(),
  timeZone: yup.string().required(),
});

const Signup = () => {
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
      minH="100vh"
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
          Join Directory
        </Heading>

        <Text textStyle="p2Regular" color="black" align="center" mt={[2, 4]}>
          Let's get you started
        </Text>

        <Box mt={["32px", "51px"]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={8}>
              <Grid templateColumns={["1fr", "1fr 1fr"]} gap={8}>
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

              <CustomModalSelect
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
                placeholder="Email Address"
                customref={register}
                required={true}
                errors={errors}
              />

              <CustomAuthInput
                name="password"
                placeholder="Password"
                customref={register}
                required={true}
                errors={errors}
              />
              {/* <FormControl
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
                <FormErrorMessage textStyle="p2Bold">
                  <Icon as={MdErrorOutline} mr={1} />
                  <Text className={styles.error}>
                    {errors?.password?.message}
                  </Text>
                </FormErrorMessage>
              </FormControl> */}
              <CustomButton
                disabled={!!errors.email || !!errors.password}
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
              border="0.5px solid #293c73"
              borderRadius="3px"
            ></Box>
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

        {/* <Center>
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
        </Center> */}
      </Box>
    </Box>
  );
};

export default Signup;
