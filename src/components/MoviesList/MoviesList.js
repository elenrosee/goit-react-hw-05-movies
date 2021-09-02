import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ arr }) {
  const location = useLocation();

  const listUrl = location.pathname + location.search;

  return (
    <ul>
      {arr.map(({ id, title }) => (
        <li key={id} className="ImageGalleryItem">
          <Link
            to={{ pathname: `/movies/${id}`, state: { prevPath: listUrl }}}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
