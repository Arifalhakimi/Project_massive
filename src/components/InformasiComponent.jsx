import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";

const InformasiComponent = () => {
    return (
        <div className="layanan ">
            <Container>
                <Row className="">
                    {semuaKelas.map((layanan) => {
                        return (
                            <div key={layanan.id} className="d-flex ">
                                <Col lg="4"className="w-50" >
                                    <img src={layanan.image} alt="" />
                                </Col>
                                <Col lg="4">
                                    <h1>{layanan.title}</h1>
                                    <div className="alamat">
                                        <button className="btn btn-danger ">5</button>
                                        <h4>{layanan.address} </h4>
                                    </div>
                                </Col>
                            </div>
                        );
                    })}

                </Row>
            </Container>
        </div>
    )
}

export default InformasiComponent