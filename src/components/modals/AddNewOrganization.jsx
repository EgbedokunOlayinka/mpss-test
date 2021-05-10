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
import CustomModalTextarea from "../global/CustomModalTextarea";
import TagsInput from "../global/TagsInput";
import WeeklyEvents from "../global/WeeklyEvents";
import { connect } from "react-redux";
import { addOrganization } from "../../store/organization/actions";
import { useEffect } from "react";

const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const schema = yup.object().shape({
  organizationName: yup.string().required(),
  email: yup.string().email().required(),
  phoneCode: yup.string().required(),
  phoneNumber: yup
    .number()
    .typeError("Input must be a valid number")
    .required(),
  month: yup.string().required(),
  day: yup.string().required(),
  year: yup.string().required(),
  // // logo: yup.string(),
  address: yup.string(),
  sector: yup.string(),
  skype: yup.string().required().matches(URL, "Link not valid"),
  backgroundInfo: yup.string(),
  // contactName: yup.string().required(),
  contactEmail: yup.string().email().required(),
  // contactPhoneCode: yup.string().required(),
  // contactPhoneNumber: yup.number().required(),
});

const AddNewOrganization = ({
  isOpen,
  onOpen,
  onClose,
  addOrganization,
  organization: { loading, error, success },
}) => {
  const [isSmallerThan481] = useMediaQuery("(max-width: 481px)");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const daysArray = [
    {
      text: "Monday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Tuesday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Wednesday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Thursday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Friday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Saturday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
    {
      text: "Sunday",
      openingHour: 0,
      openingMinute: 0,
      closingHour: 0,
      closingMinute: 0,
    },
  ];

  const [hours, setHours] = useState([...daysArray]);
  const [totalEvents, setTotalEvents] = useState([]);
  const [totalTags, setTotalTags] = useState([]);

  const [toSubmitEvents, setToSubmitEvents] = useState(false);
  const [toSubmitHours, setToSubmitHours] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    // values.weeklyEvents = totalEvents;
    values.weeklyEvents = submitEvents();
    // values.openingHours = hours;
    values.openingHours = submitHours();
    values.tags = totalTags;
    // console.log(values);
    // alert(JSON.stringify(values));
    addOrganization(values);
  };

  const submitEvents = () => {
    setToSubmitEvents(true);
  };

  const getEvents = (arr) => {
    console.log(arr);
    return arr;
  };

  const submitHours = () => {
    setToSubmitHours(true);
  };

  const getHours = (arr) => {
    console.log(arr);
    return arr;
  };

  useEffect(() => {
    if (success) {
      onClose();
      reset();
      setHours([...daysArray]);
      setTotalEvents([]);
      setTotalTags([]);
    }
  }, [success]);

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
        border="0.5px solid #27459C"
        borderRadius="20px"
        style={modalStyles}
      >
        <ModalBody px={0}>
          <Box py={6} borderBottom="0.5px solid #27459C">
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
                <Box>
                  <FormControl
                  // isRequired={required ? "true" : "false"}
                  >
                    <FormLabel color="veryDark" textStyle="p2Bold">
                      Date of Incorporation
                    </FormLabel>
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
                          min={1970}
                          max={new Date().getFullYear()}
                        />
                      </Box>
                    </Grid>
                  </FormControl>
                </Box>
                <CustomModalInput
                  name="address"
                  title=" Organization Address"
                  customref={register}
                  required={true}
                  errors={errors}
                />
                <CustomModalInput
                  name="sector"
                  title="Organization Sector"
                  customref={register}
                  required={true}
                  errors={errors}
                />
                <CustomModalInput
                  name="skype"
                  title="Organization Skype Link"
                  customref={register}
                  required={true}
                  errors={errors}
                />
                <CustomModalTextarea
                  name="backgroundInfo"
                  title="Background Info"
                  customref={register}
                  required={true}
                  errors={errors}
                />
                <FormControl
                  isInvalid={!!errors?.tags?.message}
                  errortext={errors?.tags?.message}
                >
                  <FormLabel
                    htmlFor="tags"
                    color="veryDark"
                    textStyle="p2Bold"
                    mb={0}
                  >
                    Tags
                  </FormLabel>
                  <Text color="greyTwo" textStyle="p3Regular" mb={2}>
                    Add tags that describe the organization
                  </Text>
                  <TagsInput setTotalTags={setTotalTags} />
                  <FormErrorMessage textStyle="p2Bold">
                    <Icon as={MdErrorOutline} mr={1} />
                    <Text className={styles.error}>
                      {errors.tag && errors.tag.message
                        ? spaceWord(errors.tag.message)
                        : null}
                    </Text>
                  </FormErrorMessage>
                </FormControl>
                <Box w="full">
                  <TimeStepper
                    setHours={setHours}
                    getHours={getHours}
                    toSubmitHours={toSubmitHours}
                    setToSubmitHours={setToSubmitHours}
                  />
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
                <Box w="full">
                  <WeeklyEvents
                    setTotalEvents={setTotalEvents}
                    getEvents={getEvents}
                    toSubmitEvents={toSubmitEvents}
                    setToSubmitEvents={setToSubmitEvents}
                  />
                </Box>
                {/* <CustomModalInput
                  name="contactName"
                  title="Contact Name"
                  customref={register}
                  required={true}
                  errors={errors}
                /> */}
                <CustomModalInput
                  name="contactEmail"
                  title="Contact Email"
                  customref={register}
                  required={true}
                  errors={errors}
                />
                {/* <Box>
                  <FormControl
                    isInvalid={!!errors?.contactPhoneNumber?.message}
                    errortext={errors?.contactPhoneNumber?.message}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="contactPhoneNumber"
                      color="veryDark"
                      textStyle="p2Bold"
                    >
                      Contact Phone Number
                    </FormLabel>

                    <Grid gap={4} templateColumns="2.5fr 7.5fr" w="full">
                      <Box>
                        <CustomModalSelect
                          name="contactPhoneCode"
                          customref={register}
                          required={true}
                          errors={errors}
                          data={countries}
                        />
                      </Box>
                      <Box>
                        <CustomInputSmall
                          type="number"
                          name="contactPhoneNumber"
                          customref={register}
                        />
                      </Box>
                    </Grid>
                    <FormErrorMessage textStyle="p2Bold">
                      <Icon as={MdErrorOutline} mr={1} />
                      <Text className={styles.error}>
                        {spaceWord(errors?.contactPhoneNumber?.message)}
                      </Text>
                    </FormErrorMessage>
                  </FormControl>
                </Box>{" "} */}
              </VStack>

              <HStack spacing={8} mt={8}>
                <CustomModalButton onClick={() => onClose()} dark={false}>
                  Cancel
                </CustomModalButton>
                <CustomModalButton
                  isLoading={loading}
                  type="submit"
                  dark={true}
                  full={true}
                >
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

const mapStateToProps = (state) => ({
  organization: state.addOrganization,
});

export default connect(mapStateToProps, { addOrganization })(
  AddNewOrganization
);

// export default AddNewOrganization;
