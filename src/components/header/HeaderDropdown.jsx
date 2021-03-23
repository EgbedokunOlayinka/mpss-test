import {
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Avatar,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { BiCaretDown } from "react-icons/bi";

const HeaderDropdown = () => {
  return (
    <Menu>
      <MenuButton>
        <HStack spacing={1}>
          <Avatar w={["35px", "45px"]} h={["35px", "45px"]} />
          <Icon as={BiCaretDown} color="veryDark" />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>Test One</MenuItem>
        <MenuItem>Test Two</MenuItem>
        <MenuItem>Test Three</MenuItem>
        <MenuItem>Test Four</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderDropdown;
