import React from "react";
import { Text, Box, Center, HStack, Grid } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import formatBytes from "../../utils/formatBytes";

const CustomModalPictureUpload = ({ setImageExists }) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    fileRejections,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 1,
    maxSize: 10000,
  });

  //   if (acceptedFiles.length > 0) {
  //     console.log(acceptedFiles);
  //   }

  return (
    <Grid gap={6} templateColumns="4fr 6fr" h="150px" justify="center">
      <Center
        w="full"
        h="full"
        borderRadius="7px"
        borderWidth="1px"
        borderColor="greyOne"
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <Text color="greyTwo" textStyle="p3Regular">
          + Choose a file
        </Text>
      </Center>

      <Center h="full" w="full">
        <Box>
          {acceptedFiles.length > 0 && (
            <>
              <Text color="#212738" textStyle="p2Bold" noOfLines={1}>
                {acceptedFiles[0].name}
              </Text>
              <Text color="#8a93a2" textStyle="p3Regular" noOfLines={1}>
                {formatBytes(acceptedFiles[0].size)}
              </Text>
              <HStack border="1px solid black" h="5px" w="full" mt={3}></HStack>
            </>
          )}
          <Text mt="21px" color="veryDark" textStyle="p3Regular">
            Image should not be larger than 10kb. Accepted file types include
            png, jpg, jpeg
          </Text>
        </Box>
      </Center>
    </Grid>
  );
};

export default CustomModalPictureUpload;
