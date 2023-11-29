import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LogoBengkel from "../assets/img/logoBengkelin.png";
const AboutComponent = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="about-component">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center mb-2">Tentang Kami</h1>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col lg={4} className="shadow">
                        <img src={LogoBengkel} alt="About" className="img-fluid" data-aos="fade-up" data-aos-duration="1000" />
                    </Col>
                    <Col lg={8}>
                        <p className={`about-text ${showFullText ? 'full-text' : ''}`} data-aos="fade-up" data-aos-duration="1000" >
                            <span >Bengkel.in</span> adalah platform berbasis website yang menyediakan layanan perbaikan pada kendaraan (motor & mobil).Bengkel.in akan membantu konsumen di sekitar daerah Pebayuran Bekasi untuk mencari informasi terkait bengkel terdekat, dan dapat membantu konsumen untuk menghubungi montir secara online pada website.
                            {showFullText ? (
                                
                                <h1 className='animate__animated animate__hinge animate__delay-1s'>KENA PRANK :-) </h1>
                            ) : null}
                        </p>
                        {!showFullText && (
                            <button className="btn btn-link  " onClick={toggleFullText} data-aos="fade-up" data-aos-duration="1000">
                                Baca Selengkapnya
                            </button>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutComponent;
