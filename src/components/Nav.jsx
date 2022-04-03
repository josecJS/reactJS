import './Nav.component.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="Nav-link" to='/store'>Store</Link>
              </li>
              <li className="nav-item">
                <Link className="Nav-link" to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Redirect from="/**" to="/"/>
    </div>
  );
}