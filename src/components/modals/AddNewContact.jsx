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
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
// import AddNewContactOne from "./AddNewContactOne";
// import AddNewContactTwo from "./AddNewContactTwo";
// import AddNewContactThree from "./AddNewContactThree";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CustomModalSelect from "../global/CustomModalSelect";
import titles from "../../data/titles.json";
import CustomModalInput from "../global/CustomModalInput";
import countries from "../../data/countries.json";
import CustomInputSmall from "../global/CustomInputSmall";
import { MdErrorOutline } from "react-icons/md";
import styles from "../../styles/components/CustomInputBig.module.scss";
import spaceWord from "../../utils/spaceCamel";
import CustomModalButton from "../global/CustomModalButton";
import { yupResolver } from "@hookform/resolvers/yup";
import contacts from "../../data/contacts.json";
import organizations from "../../data/organizations.json";
import circles from "../../data/circles.json";
import { connect, useSelector } from "react-redux";
import { addContact } from "../../store/contact/actions";
import { getAllCircles } from "../../store/circle/actions";
import { getAllOrganizations } from "../../store/organization/actions";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  organization: yup.string().required(),
  responsibility: yup.string().required(),
  circle: yup.string().required(),
  // profilePicture: yup.string(),
});

const AddNewContact = ({
  isOpen,
  onOpen,
  onClose,
  getAllCircles,
  getAllOrganizations,
  addContact,
}) => {
  const [isSmallerThan481] = useMediaQuery("(max-width: 481px)");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const getOrganizations = useSelector((state) => state.getOrganizations);
  const {
    loading: organizationsLoading,
    data: organizationsData,
    error: organizationsError,
  } = getOrganizations;

  const getCircles = useSelector((state) => state.getCircles);
  const {
    loading: circlesLoading,
    data: circlesData,
    error: circlesError,
  } = getCircles;

  const addContactReducer = useSelector((state) => state.addContact);
  const {
    loading: contactLoading,
    success: contactSuccess,
  } = addContactReducer;

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    values.circle_id = circsData.find(
      (circ) => values.circle === circ.title
    ).id;
    values.organization_id = orgsData.find(
      (org) => values.organization === org.title
    ).id;
    addContact(values);
    // console.log(values);
    // alert(JSON.stringify(values));
    // setStage((stage) => stage + 1);
  };

  const onCloseModal = () => {
    onClose();
    // setStage(1);
  };

  useEffect(() => {
    getAllCircles();
    getAllOrganizations();
  }, []);

  useEffect(() => {
    if (contactSuccess) {
      onClose();
      reset();
    }
  }, [contactSuccess]);

  if (organizationsError || circlesError) {
    onClose();
    // return;
  }

  const orgsData = [];
  const circsData = [];
  const respsData = [{ title: "Main" }, { title: "Other" }];

  if (organizationsData) {
    organizationsData.forEach((org) => {
      const newObj = {};
      newObj.id = org.org_id;
      newObj.title = org.org_name;

      orgsData.push(newObj);
    });
  }

  if (circlesData) {
    circlesData.forEach((circ) => {
      const newObj = {};
      newObj.id = circ.circle_id;
      newObj.title = circ.circle_name;

      circsData.push(newObj);
    });
  }

  // console.log({ orgsData });
  // console.log({ circsData });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseModal}
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
              Add a Contact
            </Text>
          </Box>

          {organizationsLoading || circlesLoading ? (
            <Center h="300px" w="full">
              <Spinner size="xl" color="customDark" />
            </Center>
          ) : (
            <Box pt={8} pb={16} px={8}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={6} w="full">
                  <CustomModalInput
                    name="email"
                    title="Email Address"
                    customref={register}
                    required={true}
                    errors={errors}
                  />

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

                  <CustomModalSelect
                    name="organization"
                    title="Add Organization"
                    subtitle="Please select the organization this contact is affiliated with"
                    customref={register}
                    required={true}
                    errors={errors}
                    data={orgsData}
                    placeholder="Select One"
                    styled={true}
                  />

                  <CustomModalSelect
                    name="responsibility"
                    title="Responsibility in Organization"
                    subtitle="Main contacts are the primary contact while other contacts are secondary for an organization"
                    customref={register}
                    required={true}
                    errors={errors}
                    data={respsData}
                    placeholder="Select One"
                    styled={true}
                  />

                  <CustomModalSelect
                    name="circle"
                    title="Assign to a circle"
                    customref={register}
                    required={true}
                    errors={errors}
                    data={circsData}
                    placeholder="Select One"
                    styled={true}
                  />
                </VStack>

                <HStack spacing={8} mt={8}>
                  <CustomModalButton onClick={() => onClose()} dark={false}>
                    Cancel
                  </CustomModalButton>
                  <CustomModalButton
                    type="submit"
                    disabled={
                      !!errors.email ||
                      !!errors.organization ||
                      !!errors.responsibility ||
                      !!errors.circle
                    }
                    dark={true}
                    full={true}
                    isLoading={contactLoading}
                  >
                    Send Portal Access
                  </CustomModalButton>
                </HStack>
              </form>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const modalStyles = {
  boxShadow: "0px 6px 10px rgba(41, 60, 115, 0.17)",
};

// const mapStateToProps = (state) => ({
//   organization: state.addOrganization,
// });

export default connect(null, {
  getAllOrganizations,
  getAllCircles,
  addContact,
})(AddNewContact);

// export default AddNewContact;
