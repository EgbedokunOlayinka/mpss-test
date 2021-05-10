import styles from "../../../styles/components/TypeLongformText.module.scss";
import { Box, Text, FormLabel } from "@chakra-ui/react";

const AnswerLongformText = ({ question, num, index, updateQuestionAnswer }) => {
  return (
    <Box>
      <FormLabel textStyle="p1Regular" color="veryDark">
        {question.title}
      </FormLabel>
      <textarea
        className={styles.area}
        placeholder="Long Answer Text"
        value={question.answer}
        onChange={(e) => updateQuestionAnswer(index, e.target.value)}
        style={{ marginTop: "1.5rem" }}
      />
    </Box>
  );
};

export default AnswerLongformText;
