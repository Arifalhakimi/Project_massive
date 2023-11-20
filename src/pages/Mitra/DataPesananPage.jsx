// import DahboardMitraComponent from "../../components/DasboardMitraComponent";
import { Container ,Row, Col} from "react-bootstrap"

const DataPesananPage = () => {
    return (
        <>
            {/* <DahboardMitraComponent/> */}
            <Container fluid className="data-pesanan">
                <Row>
                    <Col className="content mb-1">
                        <h1>Data Pesanan</h1>
                        <p>Faiz Bengkel</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DataPesananPage