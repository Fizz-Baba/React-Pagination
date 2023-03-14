import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1 style={styles}>We would love to hear from you</h1>
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
          <Link to="/services" title="Services">
          Click here for Nested route
          </Link>
        </li>
        <li>
          <Link to="/users" title="Users">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  backgroundColor: "purple",
  color: "white",
  padding: "10px 20px",
};

export default Contact;
