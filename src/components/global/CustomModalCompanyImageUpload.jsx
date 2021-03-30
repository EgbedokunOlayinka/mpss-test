import React from "react";
import { Text, Box, Center, HStack, Grid } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import formatBytes from "../../utils/formatBytes";

const CustomModalCompanyImageUpload = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    fileRejections,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 1,
  });

  return (
    <Center
      w="full"
      h="94px"
      borderRadius="7px"
      border="1px dashed #d5d9e3"
      {...getRootProps({ className: "dropzone" })}
    >
      <input {...getInputProps()} />
      <Text color="greyTwo" textStyle="p3Regular">
        + Choose a file
      </Text>
    </Center>
  );
};

export default CustomModalCompanyImageUpload;
