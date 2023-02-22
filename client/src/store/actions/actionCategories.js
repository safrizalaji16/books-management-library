import { baseUrl, FETCH_CATEGORIES } from "./actionType";
import Swal from "sweetalert2";
import axios from "axios";

export const fetchSuccessCategories = (data) => {
  return {
    type: FETCH_CATEGORIES,
    data,
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/categories`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });

      dispatch(fetchSuccessCategories(data));
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
};

export const addCategory = (input) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`${baseUrl}/categories`, input, {
        headers: { access_token: localStorage.getItem("access_token") },
      });

      Swal.fire({
        icon: "success",
        title: "Congrats...",
        text: "Success add category!",
      });
      return data;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
};
