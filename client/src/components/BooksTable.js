import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/actions/actionBooks";
import BookTableRow from "./BookTableRow";

export default function BooksTable() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books?.map((book, i) => {
          return <BookTableRow key={book.id} book={book} index={i} />;
        })}
      </tbody>
    </Table>
  );
}
