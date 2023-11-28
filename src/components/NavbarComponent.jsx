import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "./../data/index";
import { NavLink, useNavigate } from "react-router-dom";



const NavbarComponent = () => {
    const [changeColor, setChangeColor] = useState(false);
    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();
        window.addEventListener("scroll", changeBackgroundColor);
        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener("scroll", changeBackgroundColor);
        };
    }, []);

    let Navigate = useNavigate();
    return (
        <div>
            <Navbar expand="lg" className={changeColor ? "color-active" : ""} >
                <Container>
                    <Navbar.Brand href="#home" className="logo-navbar fs-3 fw-bold">Bengkel.In</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            {navLinks.map((Links) => {
                                return (
                                    <div className="nav-link" key={Links.id}>
                                        <NavLink to={Links.path} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        } end>{Links.text}</NavLink>
                                    </div>
                                );
                            }
                            )}
                        </Nav>
                        <div className="text-center">
                            <button className="btn btn-danger rounded-4 mx-3" onClick={() => Navigate('/login')}>Masuk</button>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger rounded-4 " onClick={() => Navigate('/register')}>Daftar</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
