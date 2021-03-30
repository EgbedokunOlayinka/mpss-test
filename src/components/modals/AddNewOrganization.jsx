import React, { useState } from "react";
import {
  Box,
  Heading,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  VStack,
  Grid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Icon,
  HStack,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomModalInput from "../global/CustomModalInput";
import CustomModalSelect from "../global/CustomModalSelect";
import countries from "../../data/countries.json";
import { MdErrorOutline } from "react-icons/md";
import styles from "../../styles/components/CustomInputBig.module.scss";
import spaceWord from "../../utils/spaceCamel";
import CustomInputSmall from "../global/CustomInputSmall";
import months from "../../data/months.json";
import CustomModalStepper from "../global/CustomModalStepper";
import CustomModalCompanyImageUpload from "../global/CustomModalCompanyImageUpload";
import CustomModalButton from "../global/CustomModalButton";
import TimeStepper from "../global/TimeStepper";

const schema = yup.object().shape({
  organizationName: yup.string().required(),
  email: yup.string().email().required(),
  phoneCode: yup.string().required(),
  phoneNumber: yup.number().required(),
  month: yup.string().required(),
  day: yup.string().required(),
  year: yup.string().required(),
  logo: yup.string(),
});

const AddNewOrganization = ({ isOpen, onOpen, onClose }) => {
  const [isSmallerThan481] = useMediaQuery("(max-width: 481px)");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values));
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={isSmallerThan481 ? "xs" : "md"}
      scrollBehavior={scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent
        bg="white"
        border="0.5px solid #293c73"
        borderRadius="20px"
        style={modalStyles}
      >
        <ModalBody px={0}>
          <Box py={6} borderBottom="0.5px solid #293c73">
            <Text color="customDark" textStyle="h4" align="center">
              Add New Organization
            </Text>
          </Box>

          <Box pt={8} pb={16} px={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={6}>
                <CustomModalInput
                  name="organizationName"
                  title="Organization Name"
                  customref={register}
                  required={true}
                  errors={errors}
                  subtitle="The official name of the company"
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

                <Grid
                  templateColumns="2fr 1.5fr 2fr"
                  h="42px"
                  w="full"
                  gap="20px"
                >
                  <Box w="full" h="full">
                    <CustomModalSelect
                      name="month"
                      customref={register}
                      required={true}
                      errors={errors}
                      data={months}
                      placeholder="Month"
                      styled={true}
                    />
                  </Box>
                  <Box w="full" h="full">
                    <CustomModalStepper
                      name="day"
                      customref={register}
                      placeholder="Day"
                      min={1}
                      max={31}
                    />
                  </Box>
                  <Box w="full" h="full">
                    <CustomModalStepper
                      name="year"
                      customref={register}
                      placeholder="Year"
                      min={1960}
                      max={new Date().getFullYear()}
                    />
                  </Box>
                </Grid>

                <Box w="full">
                  <TimeStepper />
                </Box>

                <Box w="full">
                  <FormControl>
                    <FormLabel
                      htmlFor="profilePicture"
                      color="veryDark"
                      textStyle="p2Bold"
                      pb={0}
                      mb={0}
                    >
                      Company Logo
                    </FormLabel>
                    <Text color="greyTwo" textStyle="p3Regular" mb={2}>
                      Add an image for the Company, usually their business logo
                    </Text>
                    <CustomModalCompanyImageUpload />
                  </FormControl>
                </Box>
              </VStack>

              <HStack spacing={8} mt={8}>
                <CustomModalButton onClick={() => onClose()} dark={false}>
                  Cancel
                </CustomModalButton>
                <CustomModalButton type="submit" dark={true} full={true}>
                  Add New Organization
                </CustomModalButton>
              </HStack>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const modalStyles = {
  boxShadow: "0px 6px 10px rgba(41, 60, 115, 0.17)",
};

export default AddNewOrganization;
