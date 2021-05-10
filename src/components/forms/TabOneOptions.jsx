import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BiCaretDown } from "react-icons/bi";

const TabOneOptions = ({ type, setQuestionType }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={BiCaretDown} color="greyTwo" />}
        w="179px"
        h="42px"
        textStyle="p2Regular"
        color="greyTwo"
        bg="white"
        border="1px solid #d5d9e3"
      >
        {type !== '' ? type : 'Select Type'}
      </MenuButton>
      <MenuList color="greyTwo" textStyle="p2Regular">
        <MenuItem onClick={() => setQuestionType('number')}>Number</MenuItem>
        <MenuItem onClick={() => setQuestionType('singleLineText')}>Single-Line Text</MenuItem>
        <MenuItem onClick={() => setQuestionType('longformText')}>Longform Text</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => setQuestionType('checkBox')}>Check Box</MenuItem>
        <MenuItem onClick={() => setQuestionType('multipleChoice')}>Multiple Choice</MenuItem>
        <MenuItem onClick={() => setQuestionType('dropDown')}>Drop Down</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => setQuestionType('fileUpload')}>File Upload</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => setQuestionType('date')}>Date</MenuItem>
        <MenuItem onClick={() => setQuestionType('time')}>Time</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => setQuestionType('phone')}>Phone Number</MenuItem>
        <MenuItem onClick={() => setQuestionType('email')}>Email Address</MenuItem>
        <MenuItem onClick={() => setQuestionType('url')}>URL</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TabOneOptions;
