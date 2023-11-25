import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TestiComponent from "./TestiComponent";

import AboutImage from '../assets/img/kelas/kelas-4.jpg';
const InformasiComponent = () => {
    let navigate = useNavigate();
    return (
        <div className="layanan-page">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center mb-2">Informasi</h1>
                        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, minima!</p>
                    </Col>
                </Row>
                <Row className="content my-4">
                    <Col lg={4} className="shadow">
                        <img src={AboutImage} alt="About" className="img-fluid" data-aos="fade-up" data-aos-duration="1000" />
                    </Col>
                    <Col lg={8}>
                        <div className="content-text">
                            <h3 className="fw-bold">Bengkel Mang Uloh</h3>
                            <Row className="d-flex">
                                <Col lg="2">
                                    <button className="btn btn-light">5km</button>
                                </Col>
                                <Col lg="10">
                                    <h5>Karang Pati</h5>
                                </Col>
                            </Row>
                            <h2>bintang</h2>
                        </div>
                        <div>
                            <p className="" data-aos="fade-up" data-aos-duration="1000" >
                                <h4 className="fw-bold">Deskripsi</h4>
                                <span >Bengkel.in</span> adalah platform berbasis website yang menyediakan layanan perbaikan pada kendaraan (motor & mobil).Bengkel.in akan membantu konsumen di sekitar daerah Pebayuran Bekasi untuk mencari informasi terkait bengkel terdekat, dan dapat membantu konsumen untuk menghubungi montir secara online pada website.
                            </p>
                            <button className="btn btn-danger" onClick={() => navigate("/pemesanan")}>Hubungi Bengkel</button>
                        </div>
                    </Col>
                    <Col>
                        <div className="gambar-cadangan mt-3 mb-3">
                            <img src={AboutImage} alt="" />
                            <img src={AboutImage} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className="heading-info-layanan">
                    <Col className="">
                        <h2 className="fw-bold">Info Layanan</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <h4>Layanan Servis:</h4>
                        <div className="d-flex">
                            <ul>
                                <li>Servis Mesin</li>
                                <li>Ganti Oli</li>
                                <li>Ban Velg</li>
                            </ul>
                            <ul>
                                <li>Body Repair</li>
                                <li>Ganti Aki</li>
                                <li>Lainnya</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4">
                        <h4>Metode Pembayaran</h4>
                        <div>
                            <ul>
                                <li>Cash/Tunai</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4">
                        <h4>Jam Oprasional</h4>
                        <div className="d-flex">
                            <div className="mx-2">
                                <ul>
                                    <li>Senin - Kamis</li>
                                    <li>Jumat</li>
                                    <li>Sabtu - Mingggu</li>
                                </ul>
                            </div>
                            <div className="mx-2">
                                <h6>08:00 - 17:30 WIB</h6>
                                <h6>Tutup</h6>
                                <h6>08:00 - 17:30 WIB</h6>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <TestiComponent/>
                </Row>
            </Container>
        </div>
    )
}

export default InformasiComponent