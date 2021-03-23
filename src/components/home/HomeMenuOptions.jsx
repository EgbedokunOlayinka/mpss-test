import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import OrganizationDropIcon from "../icons/OrganizationDropIcon";
import CircleDropIcon from "../icons/CircleDropIcon";
import ContactDropIcon from "../icons/ContactDropIcon";

const HomeMenuOptions = () => {
  return (
    <Menu>
      <MenuButton
        textStyle="p1Bold"
        color="customDark"
        borderWidth="1px"
        borderColor="customDark"
        borderRadius="10px"
        px="21px"
        py="13px"
      >
        <AddIcon w="14px" h="14px" mb="3px" mr={4} color="accentOne" />
        Add New
      </MenuButton>
      <MenuList>
        <MenuItem textStyle="p2Regular" color="veryDark">
          <Flex>
            <Box mt="2px">
              <ContactDropIcon />
            </Box>
            <Text ml={2}>Contacts</Text>
          </Flex>
        </MenuItem>
        <MenuItem textStyle="p2Regular" color="veryDark">
          <Flex>
            <Box mt="2px">
              <OrganizationDropIcon />
            </Box>
            <Text ml={2}>Organizations</Text>
          </Flex>
        </MenuItem>
        <MenuItem textStyle="p2Regular" color="veryDark">
          <Flex>
            <Box mt="2px">
              <CircleDropIcon />
            </Box>
            <Text ml={2}>Circles</Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HomeMenuOptions;
