import {
  Menu,
  MenuButton,
  Center,
  Icon,
  Text,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const CustomFilter = () => {
  return (
    <Menu>
      <MenuButton>
        <Center
          borderRadius="7px"
          border="0.5px solid #7a7e89"
          h="42px"
          w="100px"
          align="center"
          spacing="10px"
        >
          <Icon as={BsFilter} w={4} h={4} color="veryDark" />
          <Text color="veryDark" textStyle="p2Regular" ml="10px">
            Filter
          </Text>
        </Center>
      </MenuButton>
      <MenuList>
        <MenuItem>Date</MenuItem>
        <MenuItem>Status</MenuItem>
        <MenuItem>Industry</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomFilter;
