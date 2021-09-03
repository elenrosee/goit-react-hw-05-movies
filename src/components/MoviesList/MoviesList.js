import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";

export default function MoviesList({ arr }) {
  const location = useLocation();

  return (
    <ul>
      {arr.map(({ id, title }) => (
        <li key={id} className="ImageGalleryItem">
          <Link
            to={{
              pathname: `/movies/${slugify(`${title} ${id}`, { lower: true })}`,
              state: { prevPath: location },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
