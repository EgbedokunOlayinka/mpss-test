import {
  Box,
  Center,
  Text,
  Flex,
  Circle,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { BiCaretDown } from "react-icons/bi";
import styles from "../../styles/components/PageCard.module.scss";

const ContactCard = ({ contact }) => {
  return (
    <Box maxW={['260px', '256px']} px={[4, 6]} py={6} h={['314px', '300px']} className={styles.card}>
      <Center h="72px">
        <Circle size="72px" borderWidth="0.5px" borderColor="greyTwo"></Circle>
      </Center>

      <Box h={12} mt="18px">
        <Text
          textStyle="p1Bold"
          fontSize="16px"
          color="customDark"
          align="center"
        >
          {contact ? "Frankenstein Junior" : "John Doe"}
        </Text>
      </Box>

      <Text color="veryDark" textStyle="p2Regular" noOfLines={1} align="center">
        ABC Organization
      </Text>

      <Text
        color="veryDark"
        textStyle="p2Regular"
        mt="11px"
        noOfLines={1}
        align="center"
      >
        Officer
      </Text>

      <Text
        color="veryDark"
        textStyle="p2Regular"
        mt="4px"
        noOfLines={1}
        align="center"
      >
        name@email.com
      </Text>

      <Center mt="11px">
        <Menu>
          <MenuButton>
            <HStack
              spacing={1}
              borderRadius="4px"
              borderColor="greyOne"
              borderWidth="0.5px"
              w="110px"
              h="32px"
              px={2}
            >
              <Text color="greyTwo" textStyle="p3Regular">
                Select Action
              </Text>
              <Icon as={BiCaretDown} color="veryDark" />
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Box>
  );
};

export default ContactCard;
