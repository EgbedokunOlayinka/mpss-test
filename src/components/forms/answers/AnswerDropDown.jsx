import { Text, Box, Select, FormLabel } from "@chakra-ui/react";

const AnswerDropDown = ({ question, num, index, updateQuestionAnswer }) => {
  return (
    <Box>
      <FormLabel textStyle="p1Regular" color="veryDark">
        {question.title}
      </FormLabel>

      <Select
        color="greyTwo"
        textStyle="p2Regular"
        placeholder="Select option"
        mt={[4, 6]}
        w="70%"
      >
        {question.options.map((quest, index) => (
          <option key={index} value={quest}>
            {quest}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default AnswerDropDown;
