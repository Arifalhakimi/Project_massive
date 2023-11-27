import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';


const ModalEditProfile = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        image: '',
        // Tambahkan bidang lain sesuai kebutuhan Anda
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan tindakan sesuai dengan form yang sedang aktif
        // Misalnya, kirim data ke server atau lakukan pembaruan profil
        console.log('Profile form submitted');
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Phone Number:', formData.phoneNumber);
        console.log('Address:', formData.address);
        // Tambahan bidang lain sesuai kebutuhan Anda

        // Tutup modal setelah submit
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} className='modal-container '>
            <Modal.Header closeButton >
                <Modal.Title className='text-center'>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className='formContent pt-3 pb-3'>
                    <Form.Group controlId="formBasicName" className='d-flex'>
                        <Form.Label>Nama</Form.Label>
                        <Form.Control className='mx-3' type="text" placeholder="Masukan name" name="name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className='d-flex'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='mx-3' type="email" placeholder="Masukan email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhoneNumber" className='d-flex'>
                        <Form.Label>Telp</Form.Label>
                        <Form.Control type="tel" placeholder="Masukan phone number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formBasicAddress" className='d-flex'>
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Masukan address" name="address" value={formData.address} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicImage">
                        <Form.Control type="file" placeholder="Masukan name" name="name" value={formData.image} onChange={handleChange} required />
                    </Form.Group>
                    {/* Tambahkan bidang lain sesuai kebutuhan Anda */}

                    <Button variant="danger" type="submit" className='btn-submit w-100 d-flex text-center'>
                        Simpan
                    </Button>
                    <Button variant="secondary" onClick={handleClose} className='btn-cancel w-100 d-flex text-center'>
                        Batal
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

ModalEditProfile.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default ModalEditProfile;
