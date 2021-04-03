import { Box, Center, Text, Flex } from "@chakra-ui/react";
import styles from "../../styles/components/PageCard.module.scss";

const OrganizationCard = ({ organization }) => {
  return (
    <Box maxW={['260px', '256px']} px={[4, 6]} py={6} h={['314px', '300px']} className={styles.card}>
      <Center h="64px">
        <Box
          w="64px"
          h="full"
          borderRadius="5px"
          borderWidth="0.5px"
          borderColor="greyTwo"
        ></Box>
      </Center>

      <Box h={12} mt="28px">
        <Text
          textStyle="p1Bold"
          fontSize="16px"
          color="customDark"
          align="center"
        >
          {organization ? "ABC Organization" : "ABC Organization Limited"}
        </Text>
      </Box>

      <Text
        color="veryDark"
        textStyle="p2Regular"
        mt="11px"
        noOfLines={1}
        align="center"
      >
        Manufacturing
      </Text>

      <Text
        color="veryDark"
        textStyle="p2Regular"
        mt="11px"
        noOfLines={2}
        align="center"
      >
        construction, building, engineering, architecture
      </Text>

      <Flex
        px={['40px', '20px']}
        mt={4}
        align="center"
        justify="space-between"
        textStyle="p3Regular"
      >
        <Text color="#219653">Edit</Text>
        <Text color="#EB5757">Delete</Text>
      </Flex>
    </Box>
  );
};

export default OrganizationCard;
