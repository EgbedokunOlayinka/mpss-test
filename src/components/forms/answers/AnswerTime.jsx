import { Text, Input, Box, FormLabel } from "@chakra-ui/react";

const AnswerTime = ({ question, num, index, updateQuestionAnswer }) => {
  return (
    <Box>
      <FormLabel textStyle="p1Regular" color="veryDark">
        {question.title}
      </FormLabel>
      <Input
        border="none"
        borderBottom="0.5px solid #d5d9e3"
        px={0}
        py={0}
        borderRadius={0}
        _focus={{
          border: "none",
          borderBottom: "0.5px solid #d5d9e3",
        }}
        _placeholder={{
          color: "greyTwo",
        }}
        textStyle="p2Regular"
        color="black"
        type="time"
        width="150px"
        mt={[4, 6]}
        value={question.answer}
        onChange={(e) => updateQuestionAnswer(index, e.target.value)}
      />
    </Box>
  );
};

export default AnswerTime;
