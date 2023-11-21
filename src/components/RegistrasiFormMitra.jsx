import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegistrasiFormMitra = () => {
    const clickButton = useNavigate();
    
    return (
        <div className="registrasi-component">
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-bold'>Daftar Menjadi Mitra</h1>
                        <p className='text-center'>Dapatkan berbagai keuntungan dengan bergabung menjadi Mitra Bengkel.In</p>
                    </Col>
                </Row>
                <Row>
                    <div className="form-regis-bengkel  ">
                        <form action="" className="d-flex justify-content-around">
                            <Col lg="4" >
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">nama lengkap:</label>
                                    <input type="namalengkap" className="form-control" id="namalengkap" placeholder="Enter nama lengkap" name="namalengkap" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">telp:</label>
                                    <input type="telp" className="form-control" id="telp" placeholder="Enter Telepon" name="telp" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">desa:</label>
                                    <input type="desa" className="form-control" id="desa" placeholder="Enter desa" name="desa" />
                                </div>
                            </Col>
                            <Col lg="7">
                                <div className="mb-3 mt-3">
                                    <label className="form-label">Nama Bengkel:</label>
                                    <input type="nama_bengkel" className="form-control" id="nama_bengkel" placeholder="Enter nama_bengkel" name="nama_bengkel" />
                                </div>
                                <div className="form-check mb-3  d-flex  align-items-center">
                                    <label className="form-check-label mx-5  d-flex justify-content-center align-items-center">
                                        <input className="form-check-input" type="checkbox" name="motor" /> motor
                                    </label>
                                    <label className="form-check-label  d-flex justify-content-center align-items-center">
                                        <input className="form-check-input" type="checkbox" name="mobil" /> mobil
                                    </label>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">persyaratan:</label>
                                    <input type="file" className="form-control" id="persyaratan" name="persyaratan" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">alamat:</label>
                                    <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                                </div>
                                <div className="submitregismitra">
                                    <button type="submit" className="btn btn-danger w-50 rounded-5  " onClick={() => clickButton("/mitra/dashboard") } >Daftar</button>
                                </div>
                            </Col>
                        </form>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default RegistrasiFormMitra