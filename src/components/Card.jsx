import { Link } from "react-router-dom";

const Card = ({
  name,
  code,
  id,
  city,
  space_available,
  type,
  cluster,
  is_registered,
  is_live,
  ...item
}) => {
  return (
    <Link to={`/${id}`} className="card">
      <h2>{name}</h2>
      <p>{code}</p>
      <p>City : {city}</p>
      <p>Space Available : {space_available}</p>
      <p>Type : {type}</p>
      <p>{cluster}</p>
      <p>Registered : {is_registered ? "Yes" : "No"}</p>
      <p>Live : {is_live ? "Yes" : "No"}</p>
      {Object.keys(item).map(
        (key) =>
          ![
            "name",
            "city",
            "id",
            "code",
            "space_available",
            "type",
            "cluster",
            "is_registered",
            "is_live",
          ].includes(key) && (
            <p key={key}>
              {key}: {item[key]}
            </p>
          )
      )}
    </Link>
  );
};

export default Card;
