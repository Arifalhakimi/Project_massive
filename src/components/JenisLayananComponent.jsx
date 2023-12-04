import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col } from "react-bootstrap";
function JenisLayananComponent() {
  return (
    <>
      <div className="jenis-layanan-component">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Jenis Layanan</h1>
            </Col>
          </Row>
          <Row>
            <Col className=" d-flex justify-content-center">
              <Card className="shadow" style={{ width: "34rem" }}>
                <Card.Body>
                  <Card.Title className="title d-flex justify-content-center">
                    <i className="	fas fa-motorcycle"></i>
                    <p>Motor</p>
                  </Card.Title>
                  <div className="border-kendaraan d-flex justify-content-center">
                    <Col lg="6" className="baris1 ">
                      <ListGroup variant="list-group-flush mx-2 my-1">
                        <ListGroup.Item className="item-border-kendaraan d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Ganti Oli</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="fas fa-dot-circle"></i>
                          <p>Ban</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Velg</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	far fa-lightbulb"></i>
                          <p>Spesialis Lampu</p>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col lg="6" className="baris1">
                      <ListGroup variant="list-group-flush mx-2 my-1">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Service Mesin</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-car-battery"></i>
                          <p>Ganti Aki</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Service Knalpot</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-gear"></i>
                          <p>Lainnya</p>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className=" d-flex justify-content-center">
              <Card className="shadow" style={{ width: "34rem" }}>
                <Card.Body>
                  <Card.Title className="title d-flex justify-content-center">
                    <i className="	fas fa-car"></i>
                    <p>Mobil</p>
                  </Card.Title>
                  <div className="border-kendaraan d-flex justify-content-center">
                    <Col lg="6" className="baris1 ">
                      <ListGroup variant="list-group-flush mx-2 my-1">
                        <ListGroup.Item className="item-border-kendaraan d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Service AC</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="fas fa-dot-circle"></i>
                          <p>Ban</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Velg</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Ganti Oli</p>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col lg="6" className="baris1">
                      <ListGroup variant="list-group-flush mx-2 my-1">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-oil-can"></i>
                          <p>Service Mesin</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-car-battery"></i>
                          <p>Ganti Aki</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-clipboard-list"></i>
                          <p>Inspeksi</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup variant="list-group-flush mx-2 my-1 ">
                        <ListGroup.Item className="d-flex ">
                          <i className="	fas fa-gear"></i>
                          <p>Lainnya</p>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default JenisLayananComponent;
