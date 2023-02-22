import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCategory } from "../store/actions/actionCategories";

export default function CategoriesForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formCategory, setFormCategory] = useState({
    name: "",
  });

  function handleOnChange(e) {
    setFormCategory({
      ...formCategory,
      [e.target.name]: e.target.value,
    });
  }

  function handleCategory(e) {
    e.preventDefault();
    dispatch(addCategory(formCategory)).then((result) => {
      if (result) {
        navigate("/categories");
      }
    });
    setFormCategory({ name: "" });
  }

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-5">Add New Category</h1>
      </div>
      <form onSubmit={handleCategory}>
        <MDBInput
          name="name"
          value={formCategory.name}
          onChange={handleOnChange}
          wrapperClass="mb-4"
          id="form6Example3"
          label="Name"
        />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={"/categories"}>
            <MDBBtn className="mb-4" block>
              Cancel
            </MDBBtn>
          </Link>
          <MDBBtn className="mb-4" type="submit" block>
            Submit
          </MDBBtn>
        </div>
      </form>
    </>
  );
}
