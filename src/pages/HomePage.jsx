import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from "../assets/img/homehero.png";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// faqcompinent
import FaqComponent from '../components/FaqComponent';
import AboutComponent from '../components/AboutComponent';

import { kelasTerbaru, } from "../data/index";
import { useNavigate } from "react-router-dom";
import TestiComponent from '../components/TestiComponent';

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage ">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className='header-box d-flex align-items-center pt-lg-5'>
            <Col lg="6">
              <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s mt-4' >Servis kendaraanmu dimana pun dan kapan pun dengan <span>Bengkel.in! </span> </h1>
              <button className='btn btn-outline-light btn-lg rounded-5 me-2 animate__animated animate__backInUp animate__delay-1s' onClick={() => navigate("/kelas")}>Mulai</button>
            </Col>
            <Col lg="6" >
              <img src={HeroImage} alt="hero-img" className='animate__animated animate__lightSpeedInRight' />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="service w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Bengkel Terdekat</h1>
              <p className='text-center'>Kami ada banyak layanan yang bisa kamu terima</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return <Col key={kelas.id} className='shadow rounded-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay} >
                <img src={kelas.image} alt="unsplash.com" className='w-100 mb-2 rounded-top' />
                <div className='alamatservice d-flex mt-2'>
                  <i className="fas fa-map-marker"></i>
                  <h5 className=''> {kelas.alamat} </h5>
                </div>
                <h6 className=' fw-bold  '> {kelas.nama} </h6>
                <div className='start mb-2 '>
                  <i className="fa-solid fa-star"></i>
                  <p>{ kelas.rating}</p>
                </div>
              </Col>
            })}
          </Row>
          <Row>
            <Col className='text-center '>
              <button className='btn btn-success rounded-5 btn-lg ' data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/kelas")}>
                Lihat semua Pelayanan<i className='fa-solid fa-chevron-right ms-3' ></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='about'>
        <AboutComponent />
      </div>
      <div>
        <TestiComponent />
      </div>
      {/* faq start */}
      <FaqComponent />
      {/* faq end */}
    </div>
  )
}

export default HomePage