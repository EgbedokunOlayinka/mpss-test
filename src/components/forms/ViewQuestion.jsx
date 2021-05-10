import AnswerNumber from "./answers/AnswerNumber";
import AnswerSingleLineText from "./answers/AnswerSingleLineText";
import AnswerLongformText from "./answers/AnswerLongformText";
import AnswerCheckBox from "./answers/AnswerCheckBox";
import AnswerMultipleChoice from "./answers/AnswerMultipleChoice";
import AnswerDropDown from "./answers/AnswerDropDown";
import AnswerFileUpload from "./answers/AnswerFileUpload";
import AnswerDate from "./answers/AnswerDate";
import AnswerTime from "./answers/AnswerTime";
import AnswerPhone from "./answers/AnswerPhone";
import AnswerEmail from "./answers/AnswerEmail";
import AnswerURL from "./answers/AnswerURL";
import { Box, FormControl } from "@chakra-ui/react";

const ViewQuestion = ({ question, num, index, updateQuestionAnswer }) => {
  const typeMap = {
    number: {
      component: (
        <AnswerNumber
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Number",
    },
    singleLineText: {
      component: (
        <AnswerSingleLineText
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Single-Line Text",
    },
    longformText: {
      component: (
        <AnswerLongformText
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Longform Text",
    },
    checkBox: {
      component: (
        <AnswerCheckBox
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Check Box",
    },
    multipleChoice: {
      component: (
        <AnswerMultipleChoice
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Multiple Choice",
    },
    dropDown: {
      component: (
        <AnswerDropDown
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Drop Down",
    },
    fileUpload: {
      component: (
        <AnswerFileUpload
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "File Upload",
    },
    date: {
      component: (
        <AnswerDate
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Date",
    },
    time: {
      component: (
        <AnswerTime
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Time",
    },
    phone: {
      component: (
        <AnswerPhone
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Phone Number",
    },
    email: {
      component: (
        <AnswerEmail
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "Email Address",
    },
    url: {
      component: (
        <AnswerURL
          question={question}
          num={num}
          index={index}
          updateQuestionAnswer={updateQuestionAnswer}
        />
      ),
      title: "URL",
    },
  };

  return (
    <FormControl
      isRequired={question.required}
      w="full"
      bg="white"
      border="0.5px solid #d5d9e3"
      borderRadius="10px"
      minH="100px"
      style={boxStyle}
      p={[6, 8]}
    >
      {typeMap[question.questionType].component}
    </FormControl>
  );
};

const boxStyle = {
  boxShadow: "0px 4px 12px rgba(213, 217, 227, 0.2)",
};

export default ViewQuestion;
