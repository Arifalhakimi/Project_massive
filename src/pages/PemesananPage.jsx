import ImagePemesanan from "../assets/img/iamgePesan.png";
import { Container, Row, Col, Form } from "react-bootstrap";
const PemesananPage = () => {
    return (
        <div className="pemesanan-page">
            <Container className="pemesanan pb-5 ">
                <Form action="" >
                    <Row className="form-pemesanan">
                        <Col className="gambar d-flex justify-content-center">
                            <img src={ImagePemesanan} alt="" className="mx-auto d-block" />
                        </Col>
                    </Row>
                    <Row className="form-pemsanan-input">
                            <h3>Informasi Pelanggan</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="formBasicNama">
                                <Form.Control type="text" placeholder="Enter Nama" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTelepon">
                                <Form.Control type="text" placeholder="Enter Phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-pemsanan-input">
                            <h3 >Informasi Kendaraan</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="formBasicMerek">
                                <Form.Control type="text" placeholder="Enter Merek Kendaraan" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPlat">
                                <Form.Control type="text" placeholder="Enter Plat Kendaraan" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50" controlId="formBasicJenis">
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-pemsanan-input">
                            <h3>Waktu yang di inginkan</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="formBasicTanggal">
                                <Form.Control type="date" placeholder=" YYYY-MM-DD" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicJam">
                                <Form.Control type="date" placeholder=" HH:MM AM/PM" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-pemsanan-input">
                            <h3>Alamat</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-danger rounded-5 w-25">Pesan</button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default PemesananPage