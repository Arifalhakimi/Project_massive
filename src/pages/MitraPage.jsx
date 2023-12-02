import { Container, Row, Col } from "react-bootstrap";
// import HeroImage from "../assets/img/logo_home.png";
import { manfaatMitra } from "../data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import RegistrasiFormMitra from "../components/RegistrasiFormMitra";
import CarouselComponent from "../components/CarouselComponent";

const mitra = () => {
    return (
        <>
            <CarouselComponent/>
            <div className='mitra-page '>
                <div className="mitra w-100 ">
                    <Container>
                        <Row>
                            <Col className="manfaat-mitra">
                                <h1 className='text-center fw-bold'>Manfaat Menjadi Mitra</h1>
                                <p className='text-center'>Dapatkan berbagai keuntungan dengan bergabung menjadi Mitra <span> Bengkel.In </span></p>
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
                                className="mySwiper "
                            >
                                {manfaatMitra.map((manfaat) => {
                                    return (
                                        <SwiperSlide key={manfaat.id} className=' shadow'>
                                            <h4 className="title ">{manfaat.title}</h4>
                                            <h6 className="desc">{manfaat.desc} </h6>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                        </Row>
                    </Container>
                </div>
                <div>
                    <RegistrasiFormMitra />
                </div>
            </div>
        </>
    )
}

export default mitra