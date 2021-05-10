import React from "react";
import HeaderDropdown from "./HeaderDropdown";
import {
  Flex,
  Heading,
  HStack,
  Box,
  Icon,
  Text,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
import { FiMail, FiBell } from "react-icons/fi";
import Hamburger from "./Hamburger";
import { useSelector } from "react-redux";
import capitalize from "../../utils/capitalize";
import NextLink from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const Header = ({ title, sidebarOpen, setSidebarOpen, sub }) => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  return (
    <Flex justify="space-between" align="center">
      {isSmallerThan768 && (
        <Hamburger
          mt={1}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}

      {sub ? (
        <NextLink href={sub}>
          <Link
            _hover={{ opacity: "0.85", textTransform: "none" }}
            textStyle="p1Regular"
            color="customDark"
          >
            <ChevronLeftIcon h={6} w={6} color="#27459c" />
            {title}
          </Link>
        </NextLink>
      ) : (
        <Heading textStyle={["h4", "h3"]} color="customDark">
          {title}
        </Heading>
      )}

      <HStack spacing="40px">
        {!isSmallerThan768 && (
          <HStack spacing="20px">
            <Box w="20px" h="18px" position="relative">
              <Icon as={FiMail} w="full" h="full" position="absolute" />
            </Box>
            <Box w="20px" h="18px" position="relative">
              <Icon as={FiBell} w="full" h="full" position="absolute" />
            </Box>
          </HStack>
        )}

        <HStack spacing="13px">
          {!isSmallerThan768 && (
            <Text textStyle="p2Bold" color="veryDark">
              {`${capitalize(user.first_name)} ${capitalize(user.last_name)}`}
            </Text>
          )}
          <HeaderDropdown />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
