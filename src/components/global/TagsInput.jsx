import React, { useState, useRef } from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  Wrap,
  WrapItem,
  Center,
  Input,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import CustomInputSmall from "./CustomInputSmall";
import styles from "../../styles/components/CustomInputBig.module.scss";
// import styles from "../../css/TagsInput.module.css";

const TagsInput = () => {
  const [tags, setTags] = useState([
    // {
    //   id: 1,
    //   title: 'Project Management',
    // },
    // {
    //   id: 2,
    //   title: 'Excel',
    // },
  ]);
  const [tagValue, setTagValue] = useState("");

  const inputRef = useRef();

  const addTag = (e) => {
    if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
      e.preventDefault();

      if (!e.target.value.trim()) return;

      const tagExists = tags.some((tag) => tag.title === e.target.value);

      if (!tagExists) {
        setTags([...tags, { id: Math.random(), title: e.target.value }]);
        e.target.value = "";
      }

      return;
    }

    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      e.target.value === ""
    ) {
      const newTags = [...tags];
      newTags.pop();
      setTags(newTags);
    }
  };

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <Wrap
      spacing="5px"
      mt={2}
      minH={8}
      w="full"
      borderRadius="7px"
      borderWidth="1px"
      borderColor="greyOne"
      p="4px"
      onClick={() => inputRef.current.focus()}
      align="center"
    >
      {tags.map((tag, index) => (
        <WrapItem key={tag.id}>
          <HStack
            spacing={3}
            h="full"
            bg="greyOne"
            borderRadius="3px"
            py="3px"
            px="8px"
          >
            <Text
              fontSize="12px"
              fontWeight="400"
              lineHeight="16px"
              color="primaryStackBlue"
            >
              {tag.title}
            </Text>
            <Center onClick={(id) => removeTag(tag.id)}>
              <CloseIcon color="greyBlue" w="6px" h="6px" />
            </Center>
          </HStack>
        </WrapItem>
      ))}
      <WrapItem h="full">
        <Input
          className={styles.custominput}
          borderColor="transparent"
          borderRadius="7px"
          bg="white"
          _placeholder={{
            textStyle: "p2Regular",
            color: "#818796",
          }}
          h="32px"
          px={4}
          maxLength="20"
          onKeyDown={(e) => addTag(e)}
          type="text"
          name="tags"
          ref={inputRef}
        />
      </WrapItem>
    </Wrap>
  );
};

export default TagsInput;
