
// const FormComponent = () => {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const judul = formData.get('judul');
//         const deskripsi = formData.get('deskripsi');
//         // Lakukan sesuatu dengan data yang didapat dari form
//         console.log('Judul:', judul);
//         console.log('Deskripsi:', deskripsi);
//         // Lakukan sesuatu, misalnya kirim data ke server, kelola state, atau tampilkan pesan, dsb.
//     };

//     const closeForm = () => {
//         // Kode untuk menutup form
//         console.log('Menutup form...');
//     };

//     return (
//         <div id="overlay">
//             <div id="popup-form">
//                 <h1>Buat Pertanyaan Baru</h1>
//                 <hr />
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="judul">Judul Pertanyaan</label>
//                         <input type="text" id="judul" name="judul" required />
//                     </div>
//                     <div>
//                         <label htmlFor="deskripsi">Deskripsi Pertanyaan</label>
//                         <textarea id="deskripsi" name="deskripsi" rows="4" required />
//                     </div>
//                     <div>
//                         <button type="submit">Buat Pertanyaan</button>
//                     </div>
//                     <div id="tutupForm" className="tutup-popup-form" onClick={closeForm}>
//                         X
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FormComponent;
