import {
  Text,
  Box,
  CheckboxGroup,
  VStack,
  Flex,
  Checkbox,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const AnswerCheckBox = ({ question, num, index, updateQuestionAnswer }) => {
  const [val, setVal] = useState(question.answer);

  useEffect(() => {
    if (question.answer === "") {
      setVal([]);
    }
  }, [question]);

  const setValue = (val) => {
    setVal(val);
    updateQuestionAnswer(index, val);
  };

  return (
    <Box>
      <FormLabel textStyle="p1Regular" color="veryDark">
        {question.title}
      </FormLabel>

      <CheckboxGroup onChange={(val) => setValue(val)} value={val}>
        <VStack align="start" mt={[4, 6]}>
          {question.options.map((quest, index) => (
            <Flex align="center" key={index}>
              <Checkbox
                textStyle="p2Regular"
                color="black"
                key={index}
                value={quest}
              >
                {quest}
              </Checkbox>
            </Flex>
          ))}
        </VStack>
      </CheckboxGroup>
    </Box>
  );
};

export default AnswerCheckBox;
