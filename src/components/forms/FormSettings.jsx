import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useMediaQuery,
  FormControl,
  FormLabel,
  Input,
  Box,
  RadioGroup,
  HStack,
  Radio,
  VStack,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import FormSettingsBtn from "./FormSettingsBtn";

const FormSettings = ({
  isOpen,
  onClose,
  settings,
  setResponseNotification,
  setResponseDate,
  setResponseValidation,
  submitSettings,
}) => {
  const [isSmallerThan481] = useMediaQuery("(max-width: 481px)");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const [date, setDate] = useState("");
  const [validation, setValidation] = useState(null);
  const [notification, setNotification] = useState(null);

  const updateDate = (val) => {
    setDate(val);
    setResponseDate(val);
  };

  const updateValidation = (val) => {
    setValidation(val);
    setResponseValidation(val);
  };

  const updateNotification = (val) => {
    setNotification(val);
    setResponseNotification(val);
  };

  const submitForm = (e) => {
    e.preventDefault();
    submitSettings();
  };

  return (
    <Modal
      isCentered
      size={isSmallerThan481 ? "xs" : "md"}
      scrollBehavior={scrollBehavior}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        bg="white"
        border="0.5px solid #d5d9e3"
        borderRadius="10px"
        style={modalStyles}
      >
        <ModalBody px={0}>
          <Text
            textStyle="h4"
            color="customDark"
            align="center"
            py={4}
            borderBottom="0.5px solid #d5d9e3"
          >
            Settings
          </Text>

          <Box mt={8} px={["24px", "48px"]}>
            <form onSubmit={(e) => submitForm(e)}>
              <VStack align="start" spacing={8}>
                <FormControl id="responseDate" isRequired>
                  <FormLabel textStyle="p2Bold" color="greyTwo">
                    Stop collecting responses on:
                  </FormLabel>
                  <Input
                    border="none"
                    borderBottom="0.5px solid #d5d9e3"
                    px={0}
                    py={0}
                    borderRadius={0}
                    _focus={{
                      border: "none",
                      borderBottom: "0.5px solid #d5d9e3",
                    }}
                    _placeholder={{
                      color: "greyTwo",
                    }}
                    width="240px"
                    textStyle="p1Regular"
                    color="black"
                    placeholder="DD/MM/YY"
                    type="date"
                    value={date}
                    onChange={(e) => updateDate(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl id="responseValidation" isRequired>
                  <FormLabel textStyle="p2Bold" color="greyTwo">
                    Allow validation of responses
                  </FormLabel>
                  <RadioGroup
                    onChange={updateValidation}
                    value={validation}
                    name="validation"
                    mt={4}
                    // isRequired
                  >
                    <Grid templateColumns="1fr 1fr">
                      <Radio
                        textStyle="p1Regular"
                        color="veryDark"
                        value={"yes"}
                      >
                        Yes
                      </Radio>
                      <Radio
                        textStyle="p1Regular"
                        color="veryDark"
                        value={"no"}
                      >
                        No
                      </Radio>
                    </Grid>
                  </RadioGroup>
                </FormControl>

                <FormControl id="responseNotification" isRequired>
                  <FormLabel textStyle="p2Bold" color="greyTwo">
                    Notify me on progress for responses
                  </FormLabel>
                  <RadioGroup
                    onChange={updateNotification}
                    value={notification}
                    name="notification"
                    mt={4}
                    // isRequired
                  >
                    <Grid templateColumns="1fr 1fr" gridRowGap={4}>
                      <Radio
                        textStyle="p1Regular"
                        color="veryDark"
                        value={"daily"}
                      >
                        Daily
                      </Radio>
                      <Radio
                        textStyle="p1Regular"
                        color="veryDark"
                        value={"weekly"}
                      >
                        Weekly
                      </Radio>
                      <Radio
                        textStyle="p1Regular"
                        color="veryDark"
                        value={"monthly"}
                      >
                        Monthly
                      </Radio>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </VStack>

              <Flex align="center" justify="space-between" mt={12} mb={6}>
                <FormSettingsBtn onClick={() => onClose()}>
                  Cancel
                </FormSettingsBtn>
                <FormSettingsBtn type="submit" dark>
                  Save Settings
                </FormSettingsBtn>
              </Flex>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const modalStyles = {
  boxShadow: "0px 4px 12px rgba(213, 217, 227, 0.2)",
};

export default FormSettings;
