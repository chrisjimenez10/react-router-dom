//Import
import { Link } from "react-router-dom"; //NOTE: Ensure that we import the "link" component before using it


const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            {/* When we use the Link component to create navigation in our React App, we MUST use both Opening and Cosing tags - Also, we MUST include the "to" prop and the string value that represents the URL Path destination */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/pokemon/new">New Pokemon</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  