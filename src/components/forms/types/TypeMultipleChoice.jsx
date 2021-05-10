import {
  Text,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  RadioGroup,
  Radio,
  VStack,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

const TypeMultipleChoice = ({
  question,
  num,
  addQuestionOption,
  deleteQuestionOption,
}) => {
  const [opt, setOpt] = useState("");
  const [value, setValue] = useState("");

  return (
    <Box>
      <InputGroup>
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
          placeholder="Add Option"
          value={opt}
          onChange={(e) => setOpt(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={() => addQuestionOption(num - 1, opt)}
          >
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>

      <RadioGroup onChange={setValue} value={value} name="options">
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
              <IconButton
                w="12px"
                h="12px"
                mt="2px"
                borderRadius="full"
                color="greyTwo"
                aria-label="Delete Option"
                bg="transparent"
                ml="4px"
                icon={<DeleteIcon color="greyTwo" w="12px" h="12px" />}
                onClick={() => deleteQuestionOption(num - 1, index)}
              />
            </Flex>
          ))}
        </VStack>
      </RadioGroup>
    </Box>
  );
};

export default TypeMultipleChoice;
