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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src={ImageCarousel2} alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={ImageCarousel3} alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default CarouselComponent