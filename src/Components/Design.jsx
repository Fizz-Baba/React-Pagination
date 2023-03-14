import { Link } from "react-router-dom";

export default function Design() {
  return (
    <div>
      <h1 style={styles}>What would you like us to design for you????</h1>
      <ul>
        {/* <li>
          <Link to="/" title="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" title="Services">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" title="About">
            Contact
          </Link>
        </li> */} 
      </ul>
    </div>
  );
}

const styles = {
  backgroundColor: "orange",
  color: "white",
  padding: "10px 20px",
};
