import {
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  ADD_CONTACT_REQUEST,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";
import capitalize from "../../utils/capitalize";
import getToken from "../../utils/getToken";
import dayjs from "dayjs";

axios.defaults.baseURL = "https://rocky-sands-09711.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080/smtpp";
// axios.defaults.baseURL = "https://127.0.0.1/smtpp";

export const addContact = (values) => async (dispatch) => {
  try {
    const newObj = {
      email: values.email,
      responsibility: values.responsibility,
      profile_picture: "test for now",
      circle_id: values.circle_id,
      organization_id: values.organization_id,
    };

    // const transformed = qs.stringify(newObj);

    console.log({ newObj });
    // console.log(transformed);

    dispatch({
      type: ADD_CONTACT_REQUEST,
    });

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
        "Access-Token": getToken(),
      },
    };

    const { data } = await axios.post(
      "/mspstreamaddcontact.php",
      newObj,
      config
    );

    console.log({ data });

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
      type: ADD_CONTACT_SUCCESS,
      payload: data.message,
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
      type: ADD_CONTACT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};

export const getAllContacts = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CONTACTS_REQUEST,
    });

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
        "Access-Token": getToken(),
      },
    };

    const { data } = await axios.get("/mspstreamgetcontacts.php", config);

    // data.data.forEach((org) => {
    //   org.tags = JSON.parse(org.tags);
    //   org.weekly_events = JSON.parse(org.weekly_events);
    //   org.opening_hours = JSON.parse(org.opening_hours);
    // });

    console.log({ contacts: data.data });

    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
    const toast = createStandaloneToast();
    toast({
      title: "Failed to get contacts",
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
      type: GET_CONTACTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};
