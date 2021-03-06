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
  FormControl,
  Flex,
  HStack,
  Input,
  FormLabel,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomModalInput from "../global/CustomModalInput";
import CustomModalTextarea from "../global/CustomModalTextarea";
import styles from "../../styles/components/CustomInputBig.module.scss";
import CustomModalButton from "../global/CustomModalButton";
import CustomModalSelect from "../global/CustomModalSelect";
import titles from "../../data/titles.json";
import { connect, useSelector } from "react-redux";
// import { addCircle } from "../../store/circle/actions";

const schema = yup.object().shape({
  circleName: yup.string().required(),
  circleDescription: yup.string().required(),
  circleUsers: yup.string().required(),
  circleManager: yup.string().required(),
  asstCircleManager: yup.string().required(),
  // circleColor: yup.string().min(7).required(),
});

const CreateNewCircle = ({ isOpen, onOpen, onClose, addCircle }) => {
  const [isSmallerThan481] = useMediaQuery("(max-width: 481px)");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const circleData = useSelector((state) => state.addCircle);
  const { loading, error, data } = circleData;

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
    // alert(JSON.stringify(values));
    addCircle(values);
    // reset()
    // onClose();
  };

  // if (data) {
  //   reset();
  // }

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
              Create New Circle
            </Text>
          </Box>

          <Box pt={8} pb={16} px={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={6}>
                <CustomModalInput
                  name="circleName"
                  title="Circle Name"
                  customref={register}
                  required={true}
                  errors={errors}
                />
                <CustomModalTextarea
                  name="circleDescription"
                  title="Circle Description"
                  customref={register}
                  required={true}
                  errors={errors}
                />

                <CustomModalSelect
                  name="circleUsers"
                  customref={register}
                  required={true}
                  errors={errors}
                  data={titles}
                  placeholder="Please select users"
                  styled={true}
                  title="Assign Users"
                />

                <CustomModalSelect
                  name="circleManager"
                  customref={register}
                  required={true}
                  errors={errors}
                  data={titles}
                  placeholder="Please select a circle manager"
                  styled={true}
                  title="Circle Manager"
                />

                <CustomModalSelect
                  name="asstCircleManager"
                  customref={register}
                  required={true}
                  errors={errors}
                  data={titles}
                  placeholder="Please select an assistant circle manager"
                  styled={true}
                  title="Assistant Circle Manager"
                />
                {/* <FormControl
                  isInvalid={!!errors?.circleColor?.message}
                  errortext={errors?.circleColor?.message}
                  isRequired
                >
                  <FormLabel
                    htmlFor="circleColor"
                    color="veryDark"
                    textStyle="p2Bold"
                  >
                    Circle Color
                  </FormLabel>
                  <HStack w="full" spacing={6}>
                    <Center
                      w="150px"
                      h="150px"
                      borderRadius="7px"
                      borderWidth="1px"
                      borderColor="greyOne"
                    >
                      <Text align="center">Color grid goes here</Text>
                    </Center>

                    <Box
                      w="36px"
                      h="36px"
                      borderRadius="3px"
                      borderColor="customDark"
                      borderWidth="0.5px"
                    ></Box>

                    <Input
                      className={styles.custominput}
                      borderColor="transparent"
                      //   borderColor="black"
                      bg="white"
                      textStyle="p2Regular"
                      color="veryDark"
                      h="36px"
                      w="50px"
                      px={0}
                      ref={register}
                    />
                  </HStack>
                </FormControl> */}
              </VStack>

              <Flex mt={8} align="center" justify="space-between">
                <CustomModalButton onClick={() => onClose()} dark={false}>
                  Cancel
                </CustomModalButton>
                <CustomModalButton
                  type="submit"
                  dark={true}
                  isLoading={loading}
                >
                  Create
                </CustomModalButton>
              </Flex>
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

// const mapStateToProps = (state) => ({
//   circle: state.addCircle,
// });

// export default connect(null, { addCircle })(CreateNewCircle);
export default CreateNewCircle;
