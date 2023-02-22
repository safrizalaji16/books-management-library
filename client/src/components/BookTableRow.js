import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../store/actions/actionBooks";

export default function BookTableRow({ book, index }) {
  const dispatch = useDispatch();

  function handleDeleteBook() {
    dispatch(deleteBook(book.id));
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{book.title}</td>
      <td>{book.description}</td>
      <td>{book.User.name}</td>
      <td>{book.Category.name}</td>
      <td>
        {book.User.name === localStorage.name ? (
          <>
            <Link to={`/books-form/${book.id}`}>
              <Button>Edit</Button>
            </Link>
            <Button onClick={handleDeleteBook}>Delete</Button>
          </>
        ) : (
          <p style={{ color: "red" }}>No Access</p>
        )}
      </td>
    </tr>
  );
}
