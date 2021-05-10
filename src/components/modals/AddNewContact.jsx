import {
  Box,
  Heading,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddNewContactOne from "./AddNewContactOne";
import AddNewContactTwo from "./AddNewContactTwo";
import AddNewContactThree from "./AddNewContactThree";

const AddNewContact = ({ isOpen, onOpen, onClose }) => {
  const [isSmallerThan481] = useMediaQuery("(max-width: 481px)");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const [stage, setStage] = useState(1);

  const onCloseModal = () => {
    onClose();
    setStage(1);
  };

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
          {stage === 1 ? (
            <AddNewContactOne onClose={onCloseModal} setStage={setStage} />
          ) : stage === 2 ? (
            <AddNewContactTwo setStage={setStage} />
          ) : stage === 3 ? (
            <AddNewContactThree onClose={onCloseModal} setStage={setStage} />
          ) : null}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const modalStyles = {
  boxShadow: "0px 6px 10px rgba(41, 60, 115, 0.17)",
};

export default AddNewContact;
