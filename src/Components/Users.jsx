import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import UsersPage from "./UsersPage";

export default function Users() {
  const [dataUsers, setDataUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setDataUsers(data.results);
        setLoading(false);
      });
  }, []);

  //   console.log (dataUsers)

  return (
    <div>
      <div>
        <h1 style={styles}>welcome to the users page yo!!!</h1>
        <ul>
          <li>
            <Link to="/" title="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" title="Services">
              Click here for Nested route
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" title="About">
              About
            </Link>
          </li>
        </ul>
      </div>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Pagination
          data={dataUsers}
          dataLimit={10}
          pageLimit={5}
          RenderComponent={UsersPage}
        />
      )}
    </div>
  );
}

const styles = {
  backgroundColor: "purple",
  color: "white",
  padding: "10px 20px",
};
