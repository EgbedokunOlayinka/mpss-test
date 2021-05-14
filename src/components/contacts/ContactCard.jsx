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
  Skeleton,
  SkeletonText,
  Link,
  SkeletonCircle,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BiCaretDown } from "react-icons/bi";
import styles from "../../styles/components/PageCard.module.scss";
import capitalize from "../../utils/capitalize";

const ContactCard = ({ contact, loading }) => {
  return (
    <Box
      maxW={["260px", "256px"]}
      px={[4, 6]}
      py={6}
      h={["314px", "300px"]}
      className={styles.card}
    >
      <Center h="72px">
        <Skeleton isLoaded={!loading}>
          <Circle
            size="72px"
            borderWidth="0.5px"
            borderColor="greyTwo"
          ></Circle>
        </Skeleton>
      </Center>

      <Box mt="12px" noOfLines={1}>
        <Skeleton isLoaded={!loading}>
          <NextLink href={"/contacts/1"}>
            <Link
              _hover={{ opacity: "0.85", textTransform: "none" }}
              textStyle="p1Bold"
              fontSize="16px"
              color="customDark"
              align="center"
              noOfLines={1}
            >
              {`${contact.contact_first_name} ${contact.contact_last_name}`}
            </Link>
          </NextLink>
        </Skeleton>
      </Box>

      <Skeleton isLoaded={!loading}>
        <Text
          color="veryDark"
          textStyle="p2Regular"
          noOfLines={1}
          align="center"
          mt="4px"
        >
          {contact.contact_organization_name}
        </Text>
      </Skeleton>

      <Skeleton isLoaded={!loading}>
        <Text
          color="accentThree"
          bg="accentThreeLight"
          borderRadius="20px"
          textStyle="p2Bold"
          mt="18px"
          noOfLines={1}
          align="center"
          py="1px"
          px="24px"
          display="table"
          mx="auto"
        >
          {capitalize(contact.contact_responsibility)}
        </Text>
      </Skeleton>

      <Skeleton isLoaded={!loading}>
        <Text
          color="veryDark"
          textStyle="p2Regular"
          mt="4px"
          noOfLines={1}
          align="center"
        >
          {contact.contact_email}
        </Text>
      </Skeleton>

      <Center mt="18px">
        <Skeleton isLoaded={!loading}>
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
        </Skeleton>
      </Center>
    </Box>
  );
};

export default ContactCard;
