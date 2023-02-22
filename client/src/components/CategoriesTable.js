import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/actionCategories";
import CategoriesTableRow from "./CategoriesTableRow";

export default function CategoriesTable() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log(categories);

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {categories?.map((category, i) => {
          return (
            <CategoriesTableRow
              key={category.id}
              category={category}
              index={i}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
