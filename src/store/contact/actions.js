import {
  ADD_CONTACT_FIRST_SUCCESS,
  ADD_CONTACT_FIRST_FAIL,
  ADD_CONTACT_FIRST_REQUEST,
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";
import capitalize from "../../utils/capitalize";

// export addContactFirst = ({
//     email,
//   title,
//   firstName,
//   lastName,
//   phoneNumber,
//   phoneCode,
//   profilePicture,
// }) => async (dispatch) => {
//     const newObj = {
//         title,
//         email,
//         firstName,
//         lastName,
//         profilePicture,
//         phoneNumber: `${phoneCode}${String(phoneNumber)}`,
//       };

//       const transformed = qs.stringify(newObj);

//       console.log(newObj);
//       console.log(transformed);

//       dispatch({
//         type: ADD_CONTACT_REQUEST,
//       });
// }

export const addContact = ({
  email,
  title,
  firstName,
  lastName,
  phoneNumber,
  phoneCode,
  profilePicture,
}) => async (dispatch) => {
  try {
    const newObj = {
      title,
      email,
      firstName,
      lastName,
      profilePicture,
      phoneNumber: `${phoneCode}${String(phoneNumber)}`,
    };

    const transformed = qs.stringify(newObj);

    console.log(newObj);
    console.log(transformed);

    dispatch({
      type: ADD_CONTACT_FIRST_REQUEST,
    });

    const config = {
      // withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        // "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://splattai.com/mspstreamaddcontact.php",
      //   "http://localhost:8080/zuri/test.php",
      transformed,
      config
    );

    console.log(data);

    // const toast = createStandaloneToast();
    // toast({
    //   title: "Success!",
    //   description: "The Contact has been added successfully",
    //   status: "success",
    //   duration: 5000,
    //   isClosable: true,
    //   position: "top",
    //   variant: "solid",
    // });

    dispatch({
      type: ADD_CONTACT_FIRST_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const toast = createStandaloneToast();
    toast({
      title: "Failed to add Contact",
      description:
        err.response && err.response.data.message
          ? capitalize(err.response.data.message)
          : "Your request could not be completed. Please try again",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: ADD_CONTACT_FIRST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};

export const addContactSecond = (values) => async (dispatch) => {
  try {
    // const newObj = {
    //   organization,
    //   circle,
    //   responsibility,
    // };

    const transformed = qs.stringify(values);

    // console.log(newObj);
    console.log(transformed);

    dispatch({
      type: ADD_CONTACT_FIRST_REQUEST,
    });

    const config = {
      // withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        // "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://splattai.com/addcontacts2.php",
      //   "http://localhost:8080/zuri/test.php",
      transformed,
      config
    );

    console.log(data);

    const toast = createStandaloneToast();
    toast({
      title: "Success!",
      description: "The Contact has been added successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: ADD_CONTACT_FIRST_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const toast = createStandaloneToast();
    toast({
      title: "Failed to add Contact",
      description:
        err.response && err.response.data.message
          ? capitalize(err.response.data.message)
          : "Your request could not be completed. Please try again",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: ADD_CONTACT_FIRST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};
