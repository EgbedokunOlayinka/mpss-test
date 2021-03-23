import {
  Box,
  Text,
  Flex,
  Accordion,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import HomeIcon from "../icons/HomeIcon";
import ContactsIcon from "../icons/ContactsIcon";
import OrganizationsIcon from "../icons/OrganizationsIcon";
import FormsIcon from "../icons/FormsIcon";
import LogoutIcon from "../icons/LogoutIcon";
import BillingIcon from "../icons/BillingIcon";
import CirclesIcon from "../icons/CirclesIcon";
import SettingsIcon from "../icons/SettingsIcon";
import { BiCaretDown } from "react-icons/bi";
import CustomLink from "../global/CustomLink";

const NavItems = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      h="full"
      color="white"
      textStyle="p2Regular"
    >
      <Flex direction="column">
        <Box
          mx="auto"
          w="full"
          maxW="149px"
          h="55px"
          bg="lightOne"
          borderRadius="10px"
        ></Box>

        <Accordion allowToggle mt="72px" px="18px">
          <VStack align="start" justify="start">
            <CustomLink
              href="/home"
              text="Home"
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            >
              <HomeIcon />
            </CustomLink>
            <CustomLink
              href="/contacts"
              text="Contacts"
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            >
              <ContactsIcon />
            </CustomLink>
            <CustomLink
              href="/organizations"
              text="Organizations"
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            >
              <OrganizationsIcon />
            </CustomLink>
            <CustomLink
              href="/circles"
              text="Circles"
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            >
              <CirclesIcon />
            </CustomLink>
            <CustomLink
              href="/forms"
              text="Forms"
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            >
              <FormsIcon />
            </CustomLink>
            <CustomLink
              href="/billing"
              text="Billing"
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            >
              <BillingIcon />
            </CustomLink>
          </VStack>
        </Accordion>
      </Flex>

      <Flex px="18px">
        <CustomLink href="#">
          <Flex w="full" py="11px" px="18px">
            <Box h="full" mt="1.5px">
              <LogoutIcon />
            </Box>
            <Link
              color="white"
              _hover={{ opacity: "0.85", textTransform: "none" }}
              ml="8px"
            >
              Log Out
            </Link>
          </Flex>
        </CustomLink>
      </Flex>
    </Flex>
  );
};

export default NavItems;
