import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from "../assets/img/logo_home.png";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// faqcompinent
import FaqComponent from '../components/FaqComponent';
import AboutComponent from '../components/AboutComponent';

// import required modules
import { Pagination } from 'swiper/modules';


import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage ">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className='header-box d-flex align-items-center pt-lg-5'>
            <Col lg="6">
              <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s' >Cari <br /> <span> Mekanik dengan mudah</span> <br /></h1>
              <p className='mb-4 animate__animated animate__backInUp animate__delay-1s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod ab fuga corrupti deserunt ipsa.</p>
              <button className='btn btn-danger btn-lg rounded-1 me-2 animate__animated animate__backInUp animate__delay-1s' onClick={() => navigate("/kelas")}>LetsGO!!!</button>
            </Col>
            <Col lg="6">
              <img src={HeroImage} alt="hero-img" className='animate__animated animate__lightSpeedInRight' />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="service w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Service</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quaerat.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return <Col key={kelas.id} className='shadow rounded-2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay} >
                <img src={kelas.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
                <div className='start mb-2 px-3'>
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                </div>
                <h5 className='mb-2 px-3 d-flex justify-content-center'> {kelas.title} </h5>
                <p className='mb-2 text-primary fw-bold d-flex justify-content-center '> {kelas.desc} </p>
                <div className='ket d-flex justify-content-end align-items-center px-3 pb-3'>
                  <button className='btn btn-danger rounded-1 ' > {kelas.buy} </button>
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
        <AboutComponent/>
      </div>
      <div className='testimonial py-5'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-blod my-5'>Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((dataTesti) => {
                return <SwiperSlide key={dataTesti.id} className='shadow'>
                  <p className='desc'> {dataTesti.desc} </p>
                  <div className='people'>
                    <img src={dataTesti.image} alt="" />
                    <div>
                      <h5 className='mb-1'> {dataTesti.name} </h5>
                      <p className='m-0 fw-bold'>{dataTesti.skill}</p>
                    </div>
                  </div>
                </SwiperSlide>
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* faq start */}
      <FaqComponent />
      {/* faq end */}
    </div>
  )
}

export default HomePage