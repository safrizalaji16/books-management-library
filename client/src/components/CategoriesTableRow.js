export default function CategoriesTableRow({ category, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category.name}</td>
    </tr>
  );
}
