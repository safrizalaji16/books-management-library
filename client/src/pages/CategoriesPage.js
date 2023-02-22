import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesTable from "../components/CategoriesTable";

export default function CategoriesPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>List of Categories</h2>
        <Link to={"/categories-form"}>
          <Button>Add New Category</Button>
        </Link>
      </div>
      <CategoriesTable />
    </div>
  );
}
