import { Box, Text } from "@chakra-ui/react";

const OrganizationEvent = () => {
  return (
    <Box>
      <Text color="customDark" textStyle="p1Bold">
        Weekly Business Reviews
      </Text>
      <Text
        mt="8px"
        color="black"
        textStyle="p2Regular"
        w={["100%", "90%", "80%"]}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        impedit alias, deserunt amet placeat laborum qui quisquam consequuntur
        sunt neque explicabo doloribus accusamus.
      </Text>
      <Text mt="8px" color="veryDark" textStyle="p1Bold">
        Thursdays, 15:00-16:00
      </Text>
      <Text mt="4px" color="veryDark" textStyle="p1Bold">
        Zoom
      </Text>
    </Box>
  );
};

export default OrganizationEvent;
