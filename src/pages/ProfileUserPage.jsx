// import ImageBgProfile from "../assets/img/imageprofile.png";
import ImageUser from "../assets/img/testimonial/wahyu.png";
import { useState } from "react";
import ModalEditProfile from "../components/ModalEditProfile";
// import { Container} from "react-bootstrap";
const ProfileUserPage = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <>
            <div className="profile-page">
                <div className="bgimage w-100 min-vh-50">
                    <div className="imageuser d-flex justify-content-center">
                        <img src={ImageUser} alt="" />
                    </div>
                    <div className="isi-profile text-center">
                        <h3>Wahyudin</h3>
                        <p>Wahyudin@gmail.com</p>
                        <p>081234567890</p>
                        <p>Pebayuran, Bekasi, Jawa Barat</p>
                        <div className="button-profile d-flex justify-content-center">
                            <button className="btn btn-dark rounded-5" >Pengguna</button>
                            <div>
                                <button className="btn btn-danger rounded-5" onClick={handleShow}>Edit Profile</button>
                                {showModal && <ModalEditProfile show={true} handleClose={handleClose} />}
                            </div>
                        </div>
                        <div className="log d-flex justify-content-center">
                            <div className="logout-profile d-flex justify-content-center ">
                                <i className="fas fa-sign-out-alt "></i>
                                <p>keluar</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileUserPage