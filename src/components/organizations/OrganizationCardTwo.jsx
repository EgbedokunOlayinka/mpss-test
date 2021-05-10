import { Box, Text } from "@chakra-ui/react";

const OrganizationCardTwo = ({ text, light }) => {
  const chosenColor = light ? "#f88e32" : "#27459c";
  return (
    <Box
      border={`0.5px solid ${chosenColor}`}
      py={4}
      px={6}
      borderRadius="10px"
      h="250px"
      maxW="475px"
      style={boxStyle}
    >
      <Text color="greyTwo" textStyle="p2Regular">
        {text}
      </Text>
    </Box>
  );
};

const boxStyle = {
  boxShadow: "0px 4px 10px rgba(213, 217, 227, 0.49)",
};

export default OrganizationCardTwo;
