import {
  Box,
  Center,
  Text,
  Flex,
  Skeleton,
  SkeletonText,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../../styles/components/PageCard.module.scss";

const OrganizationCard = ({ organization, loading }) => {
  // loading = true;
  let orgTags = "";

  if (!loading && organization.tags && organization.tags.length > 0) {
    organization.tags.forEach((tag, index) => {
      if (index === organization.tags.length - 1) {
        orgTags += ` ${tag.title}`;
      } else {
        orgTags += `${tag.title}, `;
      }
    });
  }

  // console.log(orgTags);

  return (
    <Box
      maxW={["260px", "256px"]}
      px={[4, 6]}
      py={6}
      h={["294px", "280px"]}
      className={styles.card}
    >
      <Center h="64px">
        <Skeleton isLoaded={!loading}>
          <Box
            w="64px"
            h="64px"
            borderRadius="5px"
            borderWidth="0.5px"
            borderColor="greyTwo"
          ></Box>
        </Skeleton>
      </Center>

      <Box mt="28px">
        <Skeleton isLoaded={!loading}>
          <NextLink href={"/organizations/1"}>
            <Link
              _hover={{ opacity: "0.85", textTransform: "none" }}
              textStyle="p1Bold"
              fontSize="16px"
              color="customDark"
              align="center"
              noOfLines={1}
            >
              {organization.name}
            </Link>
          </NextLink>
          {/* <Text
            textStyle="p1Bold"
            fontSize="16px"
            color="customDark"
            align="center"
            noOfLines={1}
          >
            {organization.name}
          </Text> */}
        </Skeleton>
      </Box>

      <Skeleton isLoaded={!loading}>
        <Text
          color="veryDark"
          textStyle="p2Regular"
          mt="8px"
          noOfLines={1}
          align="center"
        >
          {organization.sector}
        </Text>
      </Skeleton>

      <SkeletonText isLoaded={!loading}>
        <Text
          color="veryDark"
          textStyle="p2Regular"
          mt="8px"
          noOfLines={2}
          align="center"
          h="42px"
        >
          {orgTags}
        </Text>
      </SkeletonText>

      <Skeleton isLoaded={!loading}>
        <Flex
          px={["40px", "20px"]}
          mt="21px"
          align="center"
          justify="space-between"
          textStyle="p3Regular"
        >
          <Text color="#219653">Edit</Text>

          <Text color="#EB5757">Delete</Text>
        </Flex>
      </Skeleton>
    </Box>
  );
};

export default OrganizationCard;
