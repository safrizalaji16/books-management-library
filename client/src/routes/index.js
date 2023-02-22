import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import LoginPage from "../pages/LoginPage";
import BooksForm from "../components/BooksForm";
import CategoriesForm from "../components/CategoriesForm";

const router = createBrowserRouter([
  {
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }

      return null;
    },
    path: "/login",
    element: <LoginPage />,
  },
  {
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }

      return null;
    },
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories-form",
        element: <CategoriesForm />,
      },
      {
        path: "/books-form",
        element: <BooksForm />,
      },
      {
        path: "/books-form/:id",
        element: <BooksForm />,
      },
    ],
  },
]);

export default router;
