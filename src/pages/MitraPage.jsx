import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/logo_home.png";
import { manfaatMitra } from "../data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import FaqComponent from "../components/FaqComponent";
import RegistrasiFormMitra from "../components/RegistrasiFormMitra";


const mitra = () => {
    return (
        <div className='mitra-page'>
            <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
                <Container>
                    <Row className='header-box d-flex align-items-center pt-lg-5'>
                        <Col lg="6">
                            <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s' >Bengkel.in sudah bekerjasama dengan lebih dari 49 bengkel di wilayah Pebayuran.</h1>
                            <p className='mb-4 animate__animated animate__backInUp animate__delay-1s'>Mulai dari bengkel resmi hingga bengkel umum bisa Konsumen temukan di
                                Bengkel.in dengan layanan servis yang beragam seperti servis mesin, ganti oli dan lainnya.</p>
                            <button className='btn btn-danger btn-lg rounded-1 me-2 animate__animated animate__backInUp animate__delay-1s'  >LetsGO!!!</button>
                        </Col>
                        <Col lg="6">
                            <img src={HeroImage} alt="hero-img" className='animate__animated animate__lightSpeedInRight' />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="mitra w-100 ">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold'>Manfaat Menjadi Mitra</h1>
                            <p className='text-center'>Dapatkan berbagai keuntungan dengan bergabung menjadi Mitra Bengkel.In</p>
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
                            {manfaatMitra.map((manfaat) => {
                                return (
                                    <SwiperSlide key={manfaat.id} className='shadow rounded-2'>
                                        <h4>{manfaat.title}</h4>
                                        <h6>{manfaat.desc} </h6>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                    </Row>
                </Container>
            </div>
            <div>
                <RegistrasiFormMitra/>
            </div>
            <div>
                <FaqComponent />
            </div>
        </div>
    )
}

export default mitra