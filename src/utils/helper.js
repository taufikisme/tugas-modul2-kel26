import { aegis } from '../data/aegis';

export const onKeyUpFunc = (event) => {
  const inputdata = event.target;
  // get input value
  if (inputdata) {
    const keyword = inputdata.value;

    // search mahasiswa using keyword
    const mahasiswas = aegis.filter((item) => {
      return (
        item.nama_lengkap.toLowerCase().includes(keyword.toLowerCase()) ||
        item.nama_panggilan.toLowerCase().includes(keyword.toLowerCase()) ||
        (item.nomor_telepon &&
          item.nomor_telepon
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())) ||
        (item.id_line &&
          item.id_line
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())) ||
        (item.tanggal_lahir &&
          item.tanggal_lahir
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())) ||
        (item.nim &&
          item.nim.toString().toLowerCase().includes(keyword.toLowerCase())) ||
        (item.email &&
          item.email
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())) ||
        (item.hobi &&
          item.hobi.toString().toLowerCase().includes(keyword.toLowerCase()))
      );
    });

    return mahasiswas;
  }
};
