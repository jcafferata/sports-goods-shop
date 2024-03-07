import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, generatePath } from "react-router-dom";
import { PRODUCTS_DETAIL } from "@constants/routes";
import slugify from "slugify";
import "./TableProducts.css";

const TableProducts = ({ products }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {products.map((prod) => {
        return (
          <tr>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td className="table__column">
              <p>{prod.description}</p>
            </td>
            <td>{prod.price}</td>
            <td>
              <Link
                to={generatePath(PRODUCTS_DETAIL, {
                  id: prod.id,
                  slug: slugify(prod.name, { lower: true }),
                })}
                aria-label={`view product ${prod.name}`}
                title={`view product ${prod.name}`}
              >
                <FontAwesomeIcon size="sm" color="black" icon={faEye} />
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default TableProducts;
