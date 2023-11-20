// import DahboardMitraComponent from "../../components/DasboardMitraComponent";
import { Container, Row, Col } from "react-bootstrap"

const RiwayatPage = () => {
    return (
        <>
            {/* <DahboardMitraComponent /> */}
            <Container fluid className="riwayat-pesanan">
                <Row>
                    <Col className="content ">
                        <h1>Riwayat Pesanan</h1>
                        <p>Faiz Bengkel</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RiwayatPage