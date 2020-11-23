import axios from "axios";

import { USER_AUTH, USER_AUTH_ERROR, SIGN_OUT } from "./type";

export const signUp = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formValues
    );
    dispatch({
      type: USER_AUTH,
      payload: response.data,
    });
    callback();
  } catch (error) {
    dispatch({
      type: USER_AUTH_ERROR,
      payload: { error: "invalid credential pair" },
    });
  }
};

export const signIn = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formValues
    );
    dispatch({
      type: USER_AUTH,
      payload: response.data,
    });
    callback();
  } catch (error) {
    dispatch({
      type: USER_AUTH_ERROR,
      payload: { error: "invalid credential pair" },
    });
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: { token: "" },
  };
};
