// import BodySideItems from './BodySideItems';
import { Box, useMediaQuery, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
// import { ReactComponent as Logo } from '../../resources/svg/logo.svg';

const MotionBox = motion(Box);

const MobileNav = ({ sidebarOpen, setSidebarOpen }) => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  const variant = {
    open: {
      x: 0,
    },
    close: {
      x: "-100%",
    },
  };

  return (
    isSmallerThan768 && (
      <MotionBox
        h="100%"
        // w="60%"
        w={["60%", "250px"]}
        position="absolute"
        transform="translateX(-100%)"
        variants={variant}
        initial={{ x: "-100%" }}
        animate={sidebarOpen ? "open" : "close"}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        zIndex={3}
      >
        <Box bg="customDark" h="100%" py='36px'>
          <NavItems sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </Box>
      </MotionBox>
    )
  );
};

export default MobileNav;
