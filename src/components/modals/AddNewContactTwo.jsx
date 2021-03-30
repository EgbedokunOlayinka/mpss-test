import React from "react";
import { Text, Box, Center } from "@chakra-ui/react";
import CustomModalButton from "../global/CustomModalButton";

const AddNewContactTwo = ({ setStage }) => {
  return (
    <Box px="65px" py="54px">
      <Text color="black" textStyle="p1Regular" align="center">
        The contact has been added successfully. Please select continue to add
        the contact to an organization and assign them to a circle
      </Text>

      <Center mt="35px">
        <CustomModalButton
          dark={true}
          full={true}
          breadth="156px"
          onClick={() => setStage((stage) => stage + 1)}
        >
          Continue
        </CustomModalButton>
      </Center>
    </Box>
  );
};

export default AddNewContactTwo;
