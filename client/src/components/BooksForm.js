import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addBook, editBook, fetchOneBook } from "../store/actions/actionBooks";
import { fetchCategories } from "../store/actions/actionCategories";

export default function BooksForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [formBook, setFormBook] = useState({
    title: "",
    description: "",
    CategoryId: "",
  });

  function handleOnChange(e) {
    setFormBook({
      ...formBook,
      [e.target.name]: e.target.value,
    });
  }

  function handleBook(e) {
    e.preventDefault();
    if (id) {
      dispatch(editBook(formBook, id)).then((result) => {
        if (result) {
          navigate("/");
        }
      });
    } else {
      dispatch(addBook(formBook)).then((result) => {
        if (result) {
          navigate("/");
        }
      });
    }
    setFormBook({
      title: "",
      description: "",
      CategoryId: "",
    });
  }

  useEffect(() => {
    dispatch(fetchCategories());
    if (id) {
      dispatch(fetchOneBook(id)).then((result) => {
        setFormBook({
          title: result.title,
          description: result.description,
          CategoryId: result.CategoryId,
        });
      });
    }
  }, [dispatch, id]);

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {!id ? (
          <h1 className="display-5">Add New Book</h1>
        ) : (
          <h1 className="display-5">Edit Book</h1>
        )}
      </div>
      <form onSubmit={handleBook}>
        <Form.Select
          name="CategoryId"
          value={formBook.CategoryId}
          onChange={handleOnChange}
          className="mb-4"
          aria-label="Category"
        >
          <option>Open this select category</option>
          {categories?.map((category) => {
            return <option value={category.id}>{category.name}</option>;
          })}
        </Form.Select>
        <MDBInput
          name="title"
          value={formBook.title}
          onChange={handleOnChange}
          wrapperClass="mb-4"
          id="form6Example3"
          label="Title"
        />
        <MDBInput
          name="description"
          value={formBook.description}
          onChange={handleOnChange}
          wrapperClass="mb-4"
          textarea
          id="form6Example7"
          rows={4}
          label="Description"
        />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={"/"}>
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
