import { Link, Outlet} from "react-router-dom";
import Design from "./Design";

function Services() {
  return (
    <div>
      <h1 style={styles}>We offer mind blowing services</h1>
      <ul>
        <li>
          <Link to="/" title="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" title="About">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" title="Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/users" title="Users">
            Users
          </Link>
        </li> 
        <li>
          <Link to="/Services/design" title="Design">
           Nested route
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

const styles = {
  backgroundColor: "purple",
  color: "white",
  padding: "10px 20px",
};

export default Services;
