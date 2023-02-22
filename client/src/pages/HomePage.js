import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BooksTable from "../components/BooksTable";

export default function HomePage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>List of Books</h2>
        <Link to={"/books-form"}>
          <Button>Add New Book</Button>
        </Link>
      </div>
      <BooksTable />
    </div>
  );
}
