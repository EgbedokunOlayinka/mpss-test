import {
  Text,
  Box,
  Editable,
  EditablePreview,
  EditableInput,
  Input,
  VStack,
  Flex,
  Circle,
  Grid,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import TabOneInput from "./TabOneInput";
import { AiOutlinePlus } from "react-icons/ai";
import TabOneQuestion from "./TabOneQuestion";

const Tabone = ({
  questions,
  addQuestion,
  deleteQuestion,
  updateQuestionType,
  updateQuestionTitle,
  updateQuestionRequired,
  addQuestionOption,
  deleteQuestionOption,
  formName,
  formDescription,
  updateFormDescription,
  updateFormName,
}) => {
  const [name, setName] = useState("Form Name");
  const [desc, setDesc] = useState("Form Description");

  const setFormName = (val) => {
    setName(val);
    updateFormName(val);
  };

  const setFormDesc = (val) => {
    setDesc(val);
    updateFormDescription(val);
  };

  return (
    <Box w="full" px={4}>
      <Box maxW="751px" w="full" align="left">
        <Box
          w="full"
          display={["block", "grid"]}
          gridTemplateColumns="9.2fr .8fr"
        >
          <Box
            border="0.5px solid #d5d9e3"
            borderRadius="10px"
            className="shadowed"
            textAlign="left"
            px={[6, 8, 10]}
            py={6}
          >
            <Input
              border="none"
              px={0}
              borderRadius={0}
              _focus={{
                borderBottom: "0.5px solid #d5d9e3",
              }}
              value={name}
              onChange={(e) => setFormName(e.target.value)}
              textStyle="h4"
              color="customDark"
            />
            <Input
              border="none"
              px={0}
              borderRadius={0}
              _focus={{
                borderBottom: "0.5px solid #d5d9e3",
              }}
              value={desc}
              onChange={(e) => setFormDesc(e.target.value)}
              textStyle="p2Regular"
              color="#000"
              mt={6}
            />
          </Box>
          <IconButton
            w="40px"
            h="40px"
            borderRadius="full"
            color="greyTwo"
            border="1px solid #d5d9e3"
            aria-label="Add question or section"
            bg="white"
            ml="12px"
            icon={<AiOutlinePlus color="greyTwo" />}
            visibility="hidden"
            display={["none", "block"]}
            disabled
          />
        </Box>

        <VStack w="full" mt={[6, 8]} spacing={[6, 8]}>
          {questions.map((question, index) => (
            <TabOneQuestion
              key={index}
              num={index + 1}
              question={question}
              questionsLength={questions.length}
              addQuestion={addQuestion}
              deleteQuestion={deleteQuestion}
              updateQuestionType={updateQuestionType}
              updateQuestionTitle={updateQuestionTitle}
              updateQuestionRequired={updateQuestionRequired}
              addQuestionOption={addQuestionOption}
              deleteQuestionOption={deleteQuestionOption}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Tabone;
