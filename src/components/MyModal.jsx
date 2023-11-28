import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import GoogleImage from "../assets/img/logo_home.png";

const MyModal = ({ show, handleClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan tindakan sesuai dengan form yang sedang aktif
    if (isLoginForm) {
      // Proses data dari form login
      console.log("Login form submitted");
    } else {
      // Proses data dari form register
      const formData = new FormData(e.target);
      const username = formData.get("username");
      const email = formData.get("email");
      const phoneNumber = formData.get("phoneNumber");
      const password = formData.get("password");
      console.log("Register form submitted");
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Password:", password);
    }
    // Tutup modal setelah submit
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} className="modal-container ">
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          {isLoginForm ? "Login" : "Register"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="formContent pt-3 pb-3">
          {/* Tampilkan form login jika isLoginForm true, dan sebaliknya */}
          {isLoginForm ? (
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Masukkan Email"
                name="email"
                required
              />
            </Form.Group>
          ) : (
            <>
              <Form.Group controlId="formBasicUsername">
                <Form.Control
                  type="text"
                  placeholder="Masukkan Username"
                  name="username"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="pt-3">
                <Form.Control
                  type="email"
                  placeholder="Masukkan email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPhoneNumber" className="pt-3">
                <Form.Control
                  type="tel"
                  placeholder="Masukkan Nomor HP"
                  name="phoneNumber"
                  required
                />
              </Form.Group>
            </>
          )}

          <Form.Group
            controlId="formBasicPassword"
            className="password pt-3 pb-3 "
          >
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn-submit w-100 d-flex text-center"
          >
            {isLoginForm ? "Login" : "Register"}
          </Button>
          <div className="login-with text-center pt-3">
            <h6>atau masuk dengan</h6>
            <div className="icon-modals ">
              <img src={GoogleImage} alt="" />
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="link" onClick={handleToggleForm}>
          {isLoginForm ? "Registrasi" : "LogIn"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

MyModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MyModal;
