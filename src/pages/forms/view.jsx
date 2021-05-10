import { Box, Text, Heading, VStack, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import ViewQuestion from "../../components/forms/ViewQuestion";

const View = () => {
  const questionsArr = [
    {
      title: "This is a question",
      questionType: "number",
      required: true,
      options: [],
    },
    {
      title: "This is a question",
      questionType: "singleLineText",
      required: false,
      options: [],
    },
    {
      title: "This is a question",
      questionType: "longformText",
      required: true,
      options: [],
    },
    {
      title: "This is a question",
      questionType: "checkBox",
      required: false,
      options: ["one", "two", "three"],
    },
    {
      title: "This is a question",
      questionType: "multipleChoice",
      required: true,
      options: ["one", "two", "three"],
    },
    {
      title: "This is a question",
      questionType: "dropDown",
      required: false,
      options: ["one", "two", "three"],
    },
    {
      title: "This is a question",
      questionType: "date",
      required: true,
      options: [],
    },
    {
      title: "This is a question",
      questionType: "time",
      required: false,
      options: [],
    },
    {
      title: "This is a question",
      questionType: "phone",
      required: true,
      options: [],
    },
    {
      title: "This is a question",
      questionType: "email",
      required: false,
      options: [],
    },
    {
      title: "This is a question",
      questionType: "url",
      required: true,
      options: [],
    },
  ];

  const formObj = {
    name: "Form Name",
    description: "Form Description",
    questions: [...questionsArr],
  };

  const addAnswerField = (arr) => {
    arr.forEach((obj) => {
      obj.answer = "";
    });
  };

  addAnswerField(formObj.questions);

  const [formData, setFormData] = useState(formObj);

  const updateQuestionAnswer = (num, val) => {
    setFormData((prev) => {
      const newObj = { ...prev };

      newObj.questions.forEach((question, index) => {
        if (num === index) {
          question.answer = val;
        }
      });

      return newObj;
    });
  };

  const submitFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box minH="100vh" w="100%" bg="#faeffe" pb={12}>
      <Box h="100%" w="100%" bg="white">
        <Box maxW="700px" mx={[4, 6, "auto"]} py={[6, 12]}>
          <Heading textStyle={["h3", null, "h2"]} color="customDark">
            {formData.name}
          </Heading>
          <Text color="black" textStyle="p2Regular" mt={4}>
            {formData.description}
          </Text>
        </Box>
      </Box>
      <Box h="100%" w="100%">
        <form onSubmit={(e) => submitFormData(e)}>
          <VStack
            align="start"
            spacing={4}
            maxW="700px"
            // w="full"
            mx={[4, 6, "auto"]}
            py={[4, 8]}
          >
            {formData.questions.map((question, index) => (
              <ViewQuestion
                key={index}
                question={question}
                index={index}
                num={index + 1}
                updateQuestionAnswer={updateQuestionAnswer}
              />
            ))}
          </VStack>
          <Flex maxW="700px" mt={[12, null, 16]} mx={[4, 6, "auto"]}>
            <Button
              ml="auto"
              _hover={{
                opacity: 0.85,
              }}
              borderRadius="7px"
              textStyle="p2Bold"
              bg="accentThree"
              color="white"
              py="13px"
              px="47px"
              _disabled={{
                pointerEvents: "none",
                cursor: "not-allowed",
                opacity: "0.4",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default View;
