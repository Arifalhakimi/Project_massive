// import DahboardMitraComponent from "../../components/DasboardMitraComponent";
import { Container, Row, Col } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import { tableHeaderDataPesanan } from "../../data/index";
import { tableDataPesanan } from "../../data/index";
import Wahyu from "../../assets/img/testimonial/wahyu.png";
import Nita from "../../assets/img/testimonial/nita.png";
const RiwayatPage = () => {
    return (
        <>
            {/* <DahboardMitraComponent /> */}
            <Container fluid className="riwayat-pesanan">
                <Row>
                    <Col className="content d-flex justify-content-around">
                        <div className="mb-1 text-center">
                            <h1>Riwayat Pesanan</h1>
                        </div>
                        <div className="border d-flex align-items-center mb-1">
                            <img src={Wahyu} alt="" />
                            <img src={Nita} alt="" />
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </Col>
                </Row>
                <Row className="content-body pt-3">
                    <Col >
                        <Table responsive>
                            <thead>
                                {tableHeaderDataPesanan.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <th>{data.no} </th>
                                            <th>{data.nama} </th>
                                            <th>{data.telepon} </th>
                                            <th>{data.email} </th>
                                            <th>{data.merekKendaraan} </th>
                                            <th>{data.platKendaraan} </th>
                                            <th>{data.layanan} </th>
                                            <th>{data.waktuPesan} </th>
                                            <th>{data.alamat} </th>
                                            <th>{data.pesanan} </th>
                                        </tr>
                                    );
                                })}
                                {/* <tr>
                                    
                                    {tableHeaderDataPesanan.map((header) => {
                                        return (
                                            <d key={header.id}>
                                                <th> {header.no} </th>
                                                <th> {header.nama} </th>
                                                <th> {header.email} </th>
                                            </d>
                                        );
                                    })}
                                    {Array.from({ length: 9 }).map((_, index) => (
                                        <th key={index}>Table heading</th>
                                    ))}
                                </tr> */}
                            </thead>
                            <tbody>
                                {tableDataPesanan.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td> {data.no} </td>
                                            <td>{data.nama} </td>
                                            <td>{data.telepon} </td>
                                            <td>{data.email} </td>
                                            <td>{data.merekKendaraan} </td>
                                            <td>{data.layanan} </td>
                                            <td>{data.platKendaraan} </td>
                                            <td>{data.waktuPesan} </td>
                                            <td>{data.alamat} </td>
                                            <td className="btnaksi pb-1 ">
                                                <button className="btn btn-primary mb-1 w-100">Terima</button>
                                                <button className="btn btn-danger w-100">Tolak</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {/* <tr>
                                    <td>1</td>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
                                </tr> */}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RiwayatPage