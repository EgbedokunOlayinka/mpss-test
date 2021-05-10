import {
  Grid,
  Box,
  IconButton,
  Flex,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import TabOneInput from "./TabOneInput";
import TabOneOptions from "./TabOneOptions";
import { FiCopy } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState, useEffect } from "react";
import TypeDate from "./types/TypeDate";
import TypeCheckBox from "./types/TypeCheckBox";
import TypeDropDown from "./types/TypeDropDown";
import TypeEmail from "./types/TypeEmail";
import TypeLongformText from "./types/TypeLongformText";
import TypeMultipleChoice from "./types/TypeMultipleChoice";
import TypeNumber from "./types/TypeNumber";
import TypePhone from "./types/TypePhone";
import TypeTime from "./types/TypeTime";
import TypeURL from "./types/TypeURL";
import TypeSingleLineText from "./types/TypeSingleLineText";
import TypeFileUpload from "./types/TypeFileUpload";
import CustomSwitch from "../global/CustomSwitch";

const TabOneQuestion = ({
  num,
  question,
  questionsLength,
  addQuestion,
  deleteQuestion,
  updateQuestionType,
  updateQuestionTitle,
  updateQuestionRequired,
  addQuestionOption,
  deleteQuestionOption,
}) => {
  const typeMap = {
    number: {
      component: <TypeNumber />,
      title: "Number",
    },
    singleLineText: {
      component: <TypeSingleLineText />,
      title: "Single-Line Text",
    },
    longformText: {
      component: <TypeLongformText />,
      title: "Longform Text",
    },
    checkBox: {
      component: (
        <TypeCheckBox
          question={question}
          addQuestionOption={addQuestionOption}
          deleteQuestionOption={deleteQuestionOption}
          num={num}
        />
      ),
      title: "Check Box",
    },
    multipleChoice: {
      component: (
        <TypeMultipleChoice
          question={question}
          addQuestionOption={addQuestionOption}
          deleteQuestionOption={deleteQuestionOption}
          num={num}
        />
      ),
      title: "Multiple Choice",
    },
    dropDown: {
      component: (
        <TypeDropDown
          question={question}
          addQuestionOption={addQuestionOption}
          deleteQuestionOption={deleteQuestionOption}
          num={num}
        />
      ),
      title: "Drop Down",
    },
    fileUpload: {
      component: <TypeFileUpload />,
      title: "File Upload",
    },
    date: {
      component: <TypeDate />,
      title: "Date",
    },
    time: {
      component: <TypeTime />,
      title: "Time",
    },
    phone: {
      component: <TypePhone />,
      title: "Phone Number",
    },
    email: {
      component: <TypeEmail />,
      title: "Email Address",
    },
    url: {
      component: <TypeURL />,
      title: "URL",
    },
  };

  const setQuestionType = (val) => {
    updateQuestionType(num - 1, val);
  };

  const setQuestionRequired = (val) => {
    updateQuestionRequired(num - 1, val);
  };

  // console.log({ num, questionsLength });

  return (
    <Box w="full" display={["block", "grid"]} gridTemplateColumns="9.2fr .8fr">
      <Box
        border="0.5px solid #d5d9e3"
        borderRadius="10px"
        className="shadowed"
        textAlign="left"
        px={[6, null, 12]}
        py={[6, 8]}
      >
        <Box
          display={["block", "flex"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <TabOneInput
            value={question.title}
            textStyle="p1Bold"
            onChange={updateQuestionTitle}
            num={num}
          />
          <Box ml={[0, 4]} mt={[2, 0]}>
            <TabOneOptions
              type={typeMap[question.questionType].title}
              setQuestionType={setQuestionType}
            />
          </Box>
        </Box>

        <Box minH="100px" mt={4} borderBottom="0.5px solid #d5d9e3" w="full">
          {typeMap[question.questionType].component}
        </Box>

        <Flex align="center" justify="space-between" mt={4}>
          <Flex align="center">
            <Text textStyle="p2Regular" color="greyTwo" mr="10px">
              Required
            </Text>
            <CustomSwitch
              value={question.required}
              setValue={setQuestionRequired}
            />
          </Flex>
          <HStack spacing={4}>
            <Box cursor="pointer">
              <Icon
                as={FiCopy}
                color="greyTwo"
                h="20px"
                w="20px"
                bg="transparent"
                aria-label="Copy question"
              />
            </Box>
            <Box cursor="pointer" onClick={() => deleteQuestion(num - 1)}>
              <Icon
                as={RiDeleteBinLine}
                color="greyTwo"
                h="20px"
                w="20px"
                bg="transparent"
                aria-label="Copy question"
              />
            </Box>
            <Box cursor="pointer">
              <Icon
                as={HiOutlineDotsVertical}
                color="greyTwo"
                h="20px"
                w="20px"
                bg="transparent"
                aria-label="Copy question"
              />
            </Box>
          </HStack>
        </Flex>
      </Box>
      <IconButton
        w="40px"
        h="40px"
        borderRadius="full"
        color="greyTwo"
        border="1px solid #d5d9e3"
        aria-label="Add question or section"
        bg="white"
        ml={["0px", "12px"]}
        float={["right", "none"]}
        mt={[4, 0]}
        icon={<AiOutlinePlus color="greyTwo" />}
        onClick={() => addQuestion(num + 1)}
        visibility={num === questionsLength ? "visible" : "hidden"}
        disabled={num !== questionsLength}
      />
    </Box>
  );
};

export default TabOneQuestion;
