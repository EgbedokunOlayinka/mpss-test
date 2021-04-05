import {
  ADD_CIRCLE_SUCCESS,
  ADD_CIRCLE_FAIL,
  ADD_CIRCLE_REQUEST,
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";
import capitalize from "../../utils/capitalize";

export const addCircle = ({
  circleName,
  circleDescription,
  circleUsers,
  circleManager,
  asstCircleManager,
}) => async (dispatch) => {
  try {
    const newObj = {
      name: circleName,
      description: circleDescription,
      users: circleUsers,
      manager: circleManager,
      assistantManager: asstCircleManager,
    };

    const transformed = qs.stringify(newObj);

    console.log(newObj);
    console.log(transformed);

    dispatch({
      type: ADD_CIRCLE_REQUEST,
    });

    const config = {
      // withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        // "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://splattai.com/mspstreamaddcircle.php",
      //   "http://localhost:8080/zuri/test.php",
      transformed,
      config
    );

    console.log(data);

    const toast = createStandaloneToast();
    toast({
      title: "Success!",
      description: "The Circle has been added successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: ADD_CIRCLE_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const toast = createStandaloneToast();
    toast({
      title: "Failed to add Circle",
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
      type: ADD_CIRCLE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};
