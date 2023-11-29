import { Container, Carousel } from "react-bootstrap";
// import HeroImage from "../assets/img/logo_home.png";
import ImageCarousel1 from "../assets/img/bengkel/bengkel4.jpeg";
import ImageCarousel2 from "../assets/img/bengkel/bengkel8.jpg";
import ImageCarousel3 from "../assets/img/bengkel/bengkel9.jpg";

const CarouselComponent = () => {
    return (
        <>
            <Container fluid>
                <Carousel className="carousel-mitra">
                    <Carousel.Item interval={1000}>
                        <img src={ImageCarousel1} alt="" />
                        <Carousel.Caption>
                            <h3>Bengkel.in sudah bekerjasama dengan lebih dari 49 bengkel di wilayah Pebayuran.</h3>
                            <p>Mulai dari bengkel resmi hingga bengkel umum bisa Konsumen temukan di
                                Bengkel.in dengan layanan servis yang beragam seperti servis mesin, ganti oli dan lainnya.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src={ImageCarousel2} alt="" />
                        <Carousel.Caption>
                            <h3>Montir Professional</h3>
                            <p>Montir yang profesional yang akan membantu anda dalam memperbaiki kendaraan anda </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ImageCarousel3} alt="" />
                        <Carousel.Caption>
                            <h3>Pelayanan Terbaik</h3>
                            <p>
                                Banyak aspek yang kami perhitungkan terhadap pelayanan kami mulai dari montir,mitra DLL.
                                Dan yang pasti pelayanan terhadap konsumen itu yang terbaik👌.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default CarouselComponent