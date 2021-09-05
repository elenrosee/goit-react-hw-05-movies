import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";
import PropTypes from "prop-types";

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

MoviesList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
