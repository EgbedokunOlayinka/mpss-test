import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CustomSwitch = ({ value, setValue }) => {
  const variant = {
    left: {
      x: 0,
    },
    right: {
      x: "110%",
    },
  };

  return (
    <Box
      w="48px"
      h="25px"
      bg="white"
      borderWidth="0.5px"
      borderColor="customDark"
      borderRadius="12px"
      p="2px"
      onClick={() => setValue(!value)}
      aria-label="Toggle View"
    >
      <MotionBox
        variants={variant}
        initial={{ x: 0 }}
        animate={value ? "left" : "right"}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
        bg="customDark"
        borderRadius="full"
        w="20px"
        h="100%"
      ></MotionBox>
    </Box>
  );
};

export default CustomSwitch;
