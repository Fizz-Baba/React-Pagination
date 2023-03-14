import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 style = {styles}>Learn about us</h1>
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
          <Link to="/contact" title="About">
            Contact
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
    backgroundColor: 'purple',
    color: 'white',
    padding: '10px 20px'      
}
