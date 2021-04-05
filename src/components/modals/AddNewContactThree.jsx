import React from "react";
import { Text, Box, VStack, Flex } from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomModalSelect from "../global/CustomModalSelect";
import contacts from "../../data/contacts.json";
import organizations from "../../data/organizations.json";
import circles from "../../data/circles.json";
import CustomModalButton from "../global/CustomModalButton";
import { connect, useSelector } from "react-redux";
import { addContactSecond } from "../../store/contact/actions";

const schema = yup.object().shape({
  organization: yup.string().required(),
  responsibility: yup.string().required(),
  circle: yup.string().required(),
});

const AddNewContactThree = ({ onClose, setStage, addContactSecond }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const contactData = useSelector((state) => state.addContact);
  const { loading, error, data } = contactData;

  const onSubmit = (values) => {
    console.log(values);
    // alert(JSON.stringify(values));
    // setStage((stage) => stage + 1);
    addContactSecond(values);
    // onClose();
  };

  return (
    <Box py="46px" px={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6}>
          <CustomModalSelect
            name="organization"
            title="Add Organization"
            subtitle="Please select the organization this contact is affiliated with"
            customref={register}
            required={true}
            errors={errors}
            data={organizations}
            placeholder="Select One"
            styled={true}
          />

          <CustomModalSelect
            name="responsibility"
            title="Responsibility in Organization"
            subtitle="Main contacts are the primary contact while other contacts are secondary for an organization"
            customref={register}
            required={true}
            errors={errors}
            data={contacts}
            placeholder="Select One"
            styled={true}
          />

          <CustomModalSelect
            name="circle"
            title="Assign to a circle"
            customref={register}
            required={true}
            errors={errors}
            data={circles}
            placeholder="Select One"
            styled={true}
          />
        </VStack>

        <Flex mt={10} align="center" justify="space-between">
          <CustomModalButton onClick={() => onClose()} dark={false}>
            Cancel
          </CustomModalButton>
          <CustomModalButton isLoading={loading} type="submit" dark={true}>
            Create
          </CustomModalButton>
        </Flex>
      </form>
    </Box>
  );
};

export default connect(null, { addContactSecond })(AddNewContactThree);
