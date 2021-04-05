import React, { useState } from "react";
import {
  Text,
  Box,
  VStack,
  Grid,
  Select,
  FormLabel,
  FormControl,
  Icon,
  FormErrorMessage,
  Flex,
  HStack,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomModalInput from "../global/CustomModalInput";
import CustomModalSelect from "../global/CustomModalSelect";
import countries from "../../data/countries.json";
import titles from "../../data/titles.json";
import CustomInputSmall from "../global/CustomInputSmall";
import { MdErrorOutline } from "react-icons/md";
import styles from "../../styles/components/CustomInputBig.module.scss";
import spaceWord from "../../utils/spaceCamel";
import CustomModalButton from "../global/CustomModalButton";
import CustomModalPictureUpload from "../global/CustomModalPictureUpload";
import { connect, useSelector } from "react-redux";
import { addContact } from "../../store/contact/actions";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  title: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneCode: yup.string().required(),
  phoneNumber: yup.number().required(),
  profilePicture: yup.string(),
});

const AddNewContactOne = ({
  onClose,
  setStage,
  addContact,
  // contact: { loading, data, error },
}) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    // alert(JSON.stringify(values));
    addContact(values);
    setStage((stage) => stage + 1);
  };

  const contactData = useSelector((state) => state.addContact);
  const { loading, error, data } = contactData;

  const [imageExists, setImageExists] = useState(false);

  // if (data) {
  //   setStage((stage) => stage + 1);
  // }

  return (
    <>
      <Box py={6} borderBottom="0.5px solid #293c73">
        <Text color="customDark" textStyle="h4" align="center">
          Add a Contact
        </Text>
      </Box>

      <Box pt={8} pb={16} px={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={6} w="full">
            <Grid gap={4} templateColumns="2.5fr 7.5fr" w="full">
              <Box>
                <CustomModalSelect
                  name="title"
                  title="Title"
                  customref={register}
                  required={true}
                  errors={errors}
                  data={titles}
                />
              </Box>
              <Box>
                <CustomModalInput
                  name="firstName"
                  title="First Name"
                  customref={register}
                  required={true}
                  errors={errors}
                />
              </Box>
            </Grid>

            <CustomModalInput
              name="lastName"
              title="Last Name"
              customref={register}
              required={true}
              errors={errors}
            />

            <CustomModalInput
              name="email"
              title="Email Address"
              customref={register}
              required={true}
              errors={errors}
            />

            <Box>
              <FormControl
                isInvalid={!!errors?.phoneNumber?.message}
                errortext={errors?.phoneNumber?.message}
                isRequired
              >
                <FormLabel
                  htmlFor="phoneNumber"
                  color="veryDark"
                  textStyle="p2Bold"
                >
                  Phone Number
                </FormLabel>

                <Grid gap={4} templateColumns="2.5fr 7.5fr" w="full">
                  <Box>
                    <CustomModalSelect
                      name="phoneCode"
                      customref={register}
                      required={true}
                      errors={errors}
                      data={countries}
                    />
                  </Box>
                  <Box>
                    <CustomInputSmall
                      type="number"
                      name="phoneNumber"
                      customref={register}
                    />
                  </Box>
                </Grid>
                <FormErrorMessage textStyle="p2Bold">
                  <Icon as={MdErrorOutline} mr={1} />
                  <Text className={styles.error}>
                    {spaceWord(errors?.phoneNumber?.message)}
                  </Text>
                </FormErrorMessage>
              </FormControl>
            </Box>

            {/* <Box w="full">
              <FormControl>
                <FormLabel
                  htmlFor="profilePicture"
                  color="veryDark"
                  textStyle="p2Bold"
                >
                  Profile Picture
                </FormLabel>
                <CustomModalPictureUpload setImageExists={setImageExists} />
              </FormControl>
            </Box> */}
          </VStack>

          <HStack spacing={8} mt={8}>
            <CustomModalButton onClick={() => onClose()} dark={false}>
              Cancel
            </CustomModalButton>
            <CustomModalButton
              type="submit"
              dark={true}
              full={true}
              isLoading={loading}
            >
              Send Portal Access
            </CustomModalButton>
          </HStack>
        </form>
      </Box>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   contact: state.addContact,
// });

export default connect(null, { addContact })(AddNewContactOne);
