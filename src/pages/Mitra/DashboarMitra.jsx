// import DasboardMitraComponent from "../components/DasboardMitraComponent"
import { Container, Row, Col } from "react-bootstrap";
import IconDashboard from "../../assets/img/kelas/kelas-8.jpg";
const DashboarMitra = () => {
    return (
        <>
            <Container fluid className="Dashboard-mitra-content">
                <Row>
                    <Col className="content mb-1 text-center">
                        <h1>Dahboard</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="content-body text-center pt-3">
                        <div>
                            <h3>SELAMAT DATANG DI <br/> <span>BENGKEL.IN</span></h3>
                            <p>Solusi layanan perbaikan kendaraanmu</p>
                        </div>
                        <div>
                            <img src={IconDashboard} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DashboarMitra