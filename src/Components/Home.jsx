import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 style = {styles}>Welcome home!</h1>
      <ul>
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
          <Link to="/contact" title="Contact">
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

export default Home;
