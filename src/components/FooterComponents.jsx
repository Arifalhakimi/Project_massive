import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const FooterComponents = () => {
    return (
        <div className='footer py-5'>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg="5">
                        <h3 className='fw-bold'>Bengkel.in</h3>
                        <p className='desc'>Bengkel.in adalah platform berbasis website yang menyediakan layanan perbaikan pada kendaraan.</p>
                        <div className='no mb-1 mt-4'>
                            <Link className='text-decoration-none'>
                                <i className='fa-brands fa-whatsapp'></i>
                                <p className='m-0'>+62 896 1234 4321</p>
                            </Link>
                        </div>
                        <div className='mail'>
                            <Link className='text-decoration-none'>
                                <i className='fa-regular fa-envelope'></i>
                                <p className='m-0'>Email : Bengkelin@gmail.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column col-lg-2 mt-lg-0 mt-5'>
                        <h5 className='fw-bold'>Menu</h5>
                        <Link to="" >Home</Link>
                        <Link to="kelas" >Layanan</Link>
                        <Link to="mitra" >Mitra</Link>
                        <Link to="faq" >Bantuan</Link>
                        <Link to="kontak" >Kontak</Link>
                    </Col>
                    <Col lg="4" className='mt-lg-0 mt-5'>
                        <h5 className='fw-bold mb-3'>Info menarik lainya</h5>
                        <div className='subsribe'>
                            <input type="text" placeholder='Isi' />
                            <button className='btn btn-danger rounded-end rounded-0 '>Klik</button>
                        </div>
                        <div className='sosial mt-3'>
                            <i className='fa-brands fa-facebook'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-linkedin'></i>
                            <i className='fa-brands fa-youtube'></i>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default FooterComponents