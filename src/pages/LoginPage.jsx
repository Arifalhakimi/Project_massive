import { useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import IconBengkel from '../assets/img/iconBengkel.png';
import { useNavigate } from "react-router-dom";
import LogoGoogle from "../assets/img/logogoogle.png";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    let Navigate = useNavigate();
    return (
        <Container fluid className="login-page w-100 min-vh-100">
            <Form>
                <img src={IconBengkel} alt="" />

                <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i className="fas fa-mail-bulk"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="Masukan E-mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="password mb-3 mx-5" controlId="formBasicPassword">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            {showPassword ? (
                                <i className="fas fa-eye" onClick={togglePasswordVisibility}></i>
                            ) : (
                                <i className="fas fa-eye-slash" onClick={togglePasswordVisibility}></i>
                            )}
                        </InputGroup.Text>
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan kata sandi"
                        />
                    </InputGroup>

                    <Form.Text className="lupa-kata-sandi d-flex justify-content-end">
                        <span> Lupa kata sandi</span>
                    </Form.Text>
                </Form.Group>

                <Button variant="danger" type="submit" className="rounded-5" onClick={() => Navigate("/")}>
                    Masuk
                </Button>
                <Form.Text className="text-muted d-flex justify-content-center">
                    Atau masuk dengan
                </Form.Text>
                <div className="icon mt-2">
                    <img src={LogoGoogle} alt="" />
                </div>
                <Form.Text className="text-muted d-flex justify-content-center mb-5 mt-2">
                    Belum punya akun? <span onClick={() => Navigate('/register')}>Daftar</span>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default LoginPage;
