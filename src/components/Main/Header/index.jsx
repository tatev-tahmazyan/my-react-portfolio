import './style.css';
import { Navbar,Nav} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

const Header = () => {
  const classnames = ({ isActive }) => isActive ? "nav-item active" : "nav-item";
    return(
      <>
          <header className="project-header fixed-top">
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                      <NavLink to="/" className={classnames}>Home</NavLink> 
                      <NavLink to="/portfolio" className={classnames}>Portfolio</NavLink>
                      <NavLink to="/about-me" className={classnames}>About me</NavLink>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar> 
          </header>
        </>
    );
}

export default Header;