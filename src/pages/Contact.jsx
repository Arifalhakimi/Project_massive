import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import AboutImage from '../assets/img/logoBengkelin.png';


const ContactPage = () => {
  return (
    <div className="Contact-page">
      <div className="Contact min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2">Hubungi Kami</h1>
              <p className="text-center ">Jika ada kendala serta keperluan silahkan hubungi kami</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col lg="6">
              <div className="form-contact">
                <form action="">
                  <div className="mb-3 mt-3">
                    <input type="text" className="form-control" id="nama_lengkap" placeholder="Masukan nama lengkap" name="namalengkap" />
                  </div>
                  <div className="mb-3 mt-3">
                    <input type="email" className="form-control" id="email" placeholder="Masukan email" name="email" />
                  </div>
                  <div className="mb-3 mt-3">
                    <input type="text" className="form-control" id="telp" placeholder="Masukan Telepon" name="telp" />
                  </div>
                  <div className="mb-3 mt-3">
                    <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Pesan"></textarea>
                  </div>
                  <div className="submitcontact d-flex justify-content-start">
                    <button type="submit" className="btn btn-danger rounded-5 w-25">Submit</button>
                  </div>
                </form>
              </div>
            </Col>
            <Col lg="6" className="d-flex justify-content-center">
              <img className="Image-contact" src={AboutImage} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default ContactPage