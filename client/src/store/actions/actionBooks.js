import { baseUrl, FETCH_BOOKS } from "./actionType";
import Swal from "sweetalert2";
import axios from "axios";

export const fetchSuccessBooks = (data) => {
  return {
    type: FETCH_BOOKS,
    data,
  };
};

export const fetchBooks = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/books`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });

      dispatch(fetchSuccessBooks(data));
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
};

export const fetchOneBook = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${baseUrl}/books/${id}`, {
        headers: { access_token: localStorage.getItem("access_token") },
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

export const addBook = (input) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`${baseUrl}/books`, input, {
        headers: { access_token: localStorage.getItem("access_token") },
      });

      Swal.fire({
        icon: "success",
        title: "Congrats...",
        text: "Success add book!",
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

export const editBook = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.put(`${baseUrl}/books/${id}`, input, {
        headers: { access_token: localStorage.getItem("access_token") },
      });

      Swal.fire({
        icon: "success",
        title: "Congrats...",
        text: "Success edit book!",
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

export const deleteBook = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios.delete(`${baseUrl}/books/${id}`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });

      dispatch(fetchBooks());
      Swal.fire({
        icon: "success",
        title: "Congrats...",
        text: "Success delete book!",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
};
