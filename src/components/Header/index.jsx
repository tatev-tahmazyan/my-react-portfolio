import styles from './style.module.css';
import { Navbar,Nav} from "react-bootstrap";
const Header = () => {
    return(
        <header className={`${styles["header"]}`}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                    <Nav.Link href="#portfolio" className="text-white">Portfolio</Nav.Link>
                    <Nav.Link href="#aboutMe" className="text-white">About me</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>   
        </header>
    );
}

export default Header;