import {
  Text,
  Box,
  Icon,
  Flex,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import InnerPageLayout from "../../components/layout/InnerPageLayout";
import Header from "../../components/header/Header";
import { RiSettings5Line } from "react-icons/ri";
import CustomModalButton from "../../components/global/CustomModalButton";
import TabOne from "../../components/forms/TabOne";
import { useState } from "react";
import { useEffect } from "react";
import FormSettings from "../../components/forms/FormSettings";

const Create = ({ sidebarOpen, setSidebarOpen }) => {
  const [questions, setQuestions] = useState([]);
  const [formName, setFormName] = useState("Form Name");
  const [formDescription, setFormDescription] = useState("Form Description");

  const [settings, setSettings] = useState({
    responseDate: "",
    responseValidation: null,
    responseNotification: null,
  });

  const setResponseDate = (val) => {
    setSettings((prev) => {
      return {
        ...prev,
        responseDate: val,
      };
    });
  };

  const setResponseValidation = (val) => {
    setSettings((prev) => {
      return {
        ...prev,
        responseValidation: val,
      };
    });
  };

  const setResponseNotification = (val) => {
    setSettings((prev) => {
      return {
        ...prev,
        responseNotification: val,
      };
    });
  };

  const submitSettings = () => {
    console.log(settings);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const addQuestion = (num) => {
    const newQuestion = {
      title: `Question ${num}`,
      questionType: "multipleChoice",
      required: true,
      options: [],
    };

    setQuestions((prev) => [...prev, newQuestion]);
  };

  const deleteQuestion = (num) => {
    setQuestions((prev) => {
      const questionsArr = [...prev];
      if (num > -1) {
        questionsArr.splice(num, 1);
      }

      return questionsArr;
    });
  };

  const updateQuestionType = (num, type) => {
    setQuestions((prev) => {
      const questionsArr = [...prev];
      questionsArr.forEach((question, index) => {
        if (index === num) {
          question.questionType = type;
        }
      });

      return questionsArr;
    });
  };

  const updateQuestionTitle = (num, val) => {
    setQuestions((prev) => {
      const questionsArr = [...prev];
      questionsArr.forEach((question, index) => {
        if (index === num) {
          question.title = val;
        }
      });

      return questionsArr;
    });
  };

  const updateQuestionRequired = (num, val) => {
    setQuestions((prev) => {
      const questionsArr = [...prev];
      questionsArr.forEach((question, index) => {
        if (index === num) {
          question.required = val;
        }
      });

      return questionsArr;
    });
  };

  const addQuestionOption = (num, val) => {
    setQuestions((prev) => {
      const questionsArr = [...prev];
      questionsArr.forEach((question, index) => {
        if (index === num) {
          question.options.push(val);
        }
      });

      return questionsArr;
    });
  };

  const deleteQuestionOption = (num, opt) => {
    setQuestions((prev) => {
      const questionsArr = [...prev];
      questionsArr.forEach((question, index) => {
        if (index === num && opt > -1) {
          question.options.splice(opt, 1);
        }
      });

      return questionsArr;
    });
  };

  const updateFormName = (val) => {
    setFormName(val);
  };

  const updateFormDescription = (val) => {
    setFormDescription(val);
  };

  const submitQuestions = () => {
    const formObj = {
      name: formName,
      description: formDescription,
      questions,
    };

    console.log(formObj);
  };

  useEffect(() => {
    addQuestion(1);
  }, []);

  return (
    <>
      <FormSettings
        isOpen={isOpen}
        onClose={onClose}
        settings={settings}
        setResponseNotification={setResponseNotification}
        setResponseDate={setResponseDate}
        setResponseValidation={setResponseValidation}
        submitSettings={submitSettings}
      />

      <Box position="relative" h="100%">
        <Box px={6}>
          <Header
            title="Back"
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sub="/forms"
          />
        </Box>

        <Flex justify="space-between" align="center" w="full" mt={16} px={6}>
          <Text color="veryDark" textStyle="p1Bold">
            Form Name
          </Text>
          <HStack spacing={6}>
            <Box
              w="23px"
              h="23px"
              onClick={onOpen}
              _hover={{
                opacity: 0.65,
              }}
            >
              <Icon as={RiSettings5Line} w="full" h="full" />
            </Box>
            <CustomModalButton w="132px" onClick={() => submitQuestions()} dark>
              Send
            </CustomModalButton>
          </HStack>
        </Flex>

        <Tabs align="center" colorScheme="tab" mt={8}>
          <TabList>
            <Tab textStyle="p2Bold">Questions</Tab>
            <Tab textStyle="p2Bold">Responses</Tab>
            <Tab textStyle="p2Bold">Approvals</Tab>
          </TabList>
          <TabPanels px={0}>
            <TabPanel px={0}>
              <TabOne
                questions={questions}
                addQuestion={addQuestion}
                deleteQuestion={deleteQuestion}
                updateQuestionTitle={updateQuestionTitle}
                updateQuestionType={updateQuestionType}
                updateQuestionRequired={updateQuestionRequired}
                addQuestionOption={addQuestionOption}
                deleteQuestionOption={deleteQuestionOption}
                formName={formName}
                formDescription={formDescription}
                updateFormDescription={updateFormDescription}
                updateFormName={updateFormName}
              />
            </TabPanel>
            <TabPanel px={0}>
              <p>two!</p>
            </TabPanel>
            <TabPanel px={0}>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

Create.Layout = InnerPageLayout;
export default Create;
