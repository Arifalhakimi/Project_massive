import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";



const Testimonial = () => {
  return (
    <div className="bg-light testimonial-page">
      <div className=" testimonial">
        <Container>
          <Row >
            <Col >
              <h1 className="text-center fw-bold">Testimonial</h1>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, sint.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
          {testimonial.map((dataTesti) => {
                return <Col key={dataTesti.id} className=' mb-5'>
                  <p className='desc '> {dataTesti.desc} </p>
                  <div className='people'>
                    <img src={dataTesti.image} alt="" />
                    <div>
                      <h5 className='mb-1'> {dataTesti.name} </h5>
                      <p className='m-0 fw-bold'>{dataTesti.skill }</p>
                    </div>
                  </div>
                </Col>
              })}
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Testimonial