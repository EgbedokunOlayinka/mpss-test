import {
  Menu,
  MenuButton,
  Flex,
  Text,
  VStack,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import CaretUpIcon from "../icons/CaretUpIcon";
import CaretDownIcon from "../icons/CaretDownIcon";

const CustomSort = () => {
  return (
    <Menu>
      <MenuButton>
        <Flex
          borderRadius="7px"
          border="0.5px solid #7a7e89"
          h="42px"
          w="91px"
          align="center"
          justify="space-between"
          pl={4}
          pr={2}
        >
          <Text color="veryDark" textStyle="p2Regular">
            Sort
          </Text>
          <VStack>
            <CaretUpIcon />
            <CaretDownIcon />
          </VStack>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Ascending</MenuItem>
        <MenuItem>Descending</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomSort;
