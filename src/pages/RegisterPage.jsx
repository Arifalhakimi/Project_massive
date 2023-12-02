import { useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
// import IconBengkel from '../assets/img/iconBengkel.png'; // Pastikan path sesuai dengan struktur proyek Anda
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    let Navigate = useNavigate();
    return (
        <Container fluid className="register-page w-100 min-vh-100">
            <Form>
                <Form.Text className="text-pendaftaran d-flex justify-content-center">
                    <h3>Pendaftaran</h3>
                </Form.Text>
                <Form.Group className="mb-3 mx-5" controlId="formBasicName">
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Masukan nama Lengkap"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1"><i className="fas fa-address-card"></i></InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
                    <InputGroup className="mb-3">

                        <Form.Control
                            placeholder="Masukan E-mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1"><i className="fas fa-mail-bulk"></i></InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="password mb-3 mx-5" controlId="formBasicPassword">
                    <InputGroup className="mb-3">
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan kata sandi"
                        />
                        <InputGroup.Text id="basic-addon1">
                            {showPassword ? (
                                <i className="fas fa-eye" onClick={togglePasswordVisibility}></i>
                            ) : (
                                <i className="fas fa-eye-slash" onClick={togglePasswordVisibility}></i>
                            )}
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="password mb-3 mx-5" controlId="formBasicConfirmPassword">
                    <InputGroup className="mb-3">
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Konfirmasi kata sandi"
                        />
                        <InputGroup.Text id="basic-addon1">
                            {showPassword ? (
                                <i className="fas fa-eye" onClick={togglePasswordVisibility}></i>
                            ) : (
                                <i className="fas fa-eye-slash" onClick={togglePasswordVisibility}></i>
                            )}
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Button variant="danger" type="submit" className="rounded-5">
                    Daftar
                </Button>
                <div className="icon mb-2 mt-2">
                    <i className="fab fa-google"></i>
                </div>
                <Form.Text className="text-muted d-flex justify-content-center mb-5">
                    Sudah punya akun? <span onClick={() => Navigate('/login')}>Masuk</span>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default RegisterPage;
