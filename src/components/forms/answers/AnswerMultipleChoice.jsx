import {
  Text,
  Box,
  RadioGroup,
  VStack,
  Flex,
  Radio,
  FormLabel,
} from "@chakra-ui/react";

const AnswerMultipleChoice = ({
  question,
  num,
  index,
  updateQuestionAnswer,
}) => {
  const setValue = (val) => {
    updateQuestionAnswer(index, val);
  };

  return (
    <Box>
      <FormLabel textStyle="p1Regular" color="veryDark">
        {question.title}
      </FormLabel>

      <RadioGroup onChange={setValue} value={question.answer} name="options">
        <VStack align="start" my={4}>
          {question.options.map((quest, index) => (
            <Flex align="center" key={index}>
              <Radio
                textStyle="p2Regular"
                color="black"
                key={index}
                value={quest}
              >
                {quest}
              </Radio>
            </Flex>
          ))}
        </VStack>
      </RadioGroup>
    </Box>
  );
};

export default AnswerMultipleChoice;
