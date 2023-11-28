import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqComponent from "../components/FaqComponent";
import { useNavigate } from "react-router-dom";

const KelasPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/informasi")
  }
  return (
    <div className="service-page">
      <div className="service min-vh-100">
        <Container fluid>
          <Row className="headingBengkel ">
            <Col lg="6" className="">
              <div className="text-bengkel mt-3 ">
                <h1 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">Pilih Bengkel</h1>
              </div>
            </Col>
            <Col lg="6" className="seacrh-bengkel d-flex justify-content-end">
              <div className="">
                <form action="">
                  <div className="mb-3 mt-3">
                    <input type="text" className="form-control animate__animated animate__fadeInUp animate__delay-1s w-100 jus" id="seacrh" placeholder="Cari" name="seacrh" />
                    
                  </div>
                </form>
                <div className="button-bengkel animate__animated animate__fadeInUp animate__delay-1s">
                  <button className="btn btn-danger mx-3">Terdekat</button>
                  <button className="btn btn-danger">Populer</button>
                </div>
              </div>

            </Col>

          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              return <Col key={kelas.id} className='shadow rounded-2 mt-5' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img src={kelas.image} alt="unsplash.com" className='w-100 mb-3 rounded-top' />
                <div className="addres d-flex justtify-content-center ">
                  <div className="jalan col-lg-10 d-flex">
                    <i className={kelas.iconAlamat}></i>
                    <p>{kelas.address}</p>
                  </div>
                  <div className="open col-lg-2 d-flex justify-content-end">
                    <p>buka</p>
                    <i className="fas fa-circle"></i>
                  </div>
                  {/* <h6 className="align-items-center"></h6> */}
                </div>
                <div className="title">
                  <h5 className=''> {kelas.title} </h5>
                </div>
                <div className='ket d-flex justify-content-between align-items-center pb-3'>
                  <div className='start d-flex col-lg-6'>
                    <i className={kelas.star1}></i>
                    <p>{ kelas.rating}</p>
                  </div>
                  <div className="button-detail col-lg-6 d-flex justify-content-end">
                    <button className='btn btn-danger rounded-4' onClick={handleClick} > {kelas.buy} </button>
                  </div>
                </div>
              </Col>
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
}

export default KelasPage