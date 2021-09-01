import { Link } from "react-router-dom";

export default function MoviesList({ arr }) {
  return (
    <ul>
      {arr.map(({ id, title }) => (
        <li key={id} className="ImageGalleryItem">
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
