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

const CircleCard = ({ circle }) => {
  return (
    <Flex maxW="360px" className={styles.circleCard}>
      <Box
        w="48px"
        h="full"
        bg="accentOne"
        borderTopLeftRadius="10px"
        borderBottomLeftRadius="10px"
      ></Box>
      <Box w="full" h="full" py={6} px={4}>
        <Text color="customDark" textStyle="p1Bold" noOfLines={1}>
          Circle Name
        </Text>
        <Text
          mt="21px"
          textStyle="p2Regular"
          color="veryDark"
          noOfLines={4}
          h="84px"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, quisquam
          voluptatibus? Voluptas veritatis natus doloremque.
        </Text>
        <Text mt="9px" textStyle="p2Regular" color="greyTwo">
          Circle Manager
        </Text>
        <Text mt={4} textStyle="p2Regular" color="greyTwo">
          Status:{" "}
          <Text as="span" textStyle="p2Bold" color="green.500">
            Active
          </Text>
        </Text>

        <Box mt={8}>
          <Menu>
            <MenuButton>
              <Flex
                align="center"
                justify="space-between"
                borderRadius="4px"
                borderColor="greyOne"
                borderWidth="0.5px"
                w="167px"
                h="32px"
                px={2}
              >
                <Text color="greyTwo" textStyle="p3Regular">
                  Select Action
                </Text>
                <Icon as={BiCaretDown} color="veryDark" />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Flex>
  );
};

export default CircleCard;
