import ImagePemesanan from "../assets/img/imgpesanan.png";
import { Container, Row, Col, Form } from "react-bootstrap";
const PemesananPage = () => {
    return (
        <div className="pemesanan-page">
            <Container className="pemesanan pb-5 ">
                <Form action="" >
                    <Row className="form-pemsanan-input">
                        <Col className="gambar d-flex justify-content-center">
                            <img src={ImagePemesanan} alt="" className="mx-auto d-block" />
                        </Col>
                        <h3>Informasi Pelanggan</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="formBasicNama">
                                <Form.Control type="text" placeholder="Masukan Nama" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTelepon">
                                <Form.Control type="text" placeholder="Masukan No Telephone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Masukan email" />
                            </Form.Group>
                        </Col>
                        <h3 >Informasi Kendaraan</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="formBasicMerek">
                                <Form.Control type="text" placeholder="Masukan Merek Kendaraan" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPlat">
                                <Form.Control type="text" placeholder="Masukan Plat Kendaraan" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50" controlId="formBasicJenis">
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Ganti Oli</option>
                                    <option value="2">Servis Ringan</option>
                                    <option value="3">Tambal Ban</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <h3>Waktu yang di inginkan</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="formBasicTanggal">
                                <Form.Control type="date" placeholder=" YYYY-MM-DD" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicJam">
                                <Form.Control type="time" />
                            </Form.Group>
                        </Col>
                        <h3>Alamat</h3>
                        <Col className="inputan">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                            <button type="submit" className="btn btn-danger rounded-5 w-25 fw-bold">Pesan</button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default PemesananPage