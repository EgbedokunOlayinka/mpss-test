import { Text, Flex } from "@chakra-ui/react";

const OrganizationWeekday = ({ day, start, end, closed }) => {
  return (
    <Flex>
      <Text color="veryDark" textStyle="p1Regular" w="100px">
        {day}
      </Text>
      <Text color="veryDark" textStyle="p1Bold" ml={["12px", null, "12px"]}>
        {closed ? "Closed" : `${start} - ${end}`}
      </Text>
    </Flex>
  );
};

export default OrganizationWeekday;
