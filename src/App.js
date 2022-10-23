import React, { useState } from 'react';
import './App.css';
import { onKeyUpFunc } from './utils/helper';
import Card from './components/Card';

function App() {
  const [mahasiswa, setMahasiswa] = useState(null);
  const [keyword, setKeyword] = useState('');

  const onKeyUpHandler = (event) => {
    setKeyword(event.target.value);
    setMahasiswa(onKeyUpFunc(event));
  };
  return (
    <div className="container">
      <input
        onKeyUp={(event) => onKeyUpHandler(event)}
        type="text"
        placeholder="Cari!"
      />
      <div id="result">
        {mahasiswa === null && <p>Harap masukkan kata kunci</p>}
        {mahasiswa !== null && mahasiswa.length === 0 && (
          <p>{`Hasil pencarian untuk kata kunci "${keyword}" tidak ditemukan`}</p>
        )}
        {mahasiswa &&
          mahasiswa.length > 0 &&
          mahasiswa.map((item, i) => <Card key={i} {...item} />)}
      </div>
    </div>
  );
}

export default App;
