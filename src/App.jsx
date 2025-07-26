import { useRef } from 'react';
import './App.css';
import Header from './component/header';
import Section01 from './component/Section01';
import Section02 from './component/Section02';
import Section03 from './component/Section03';
import Kelas from './component/Kelas';
import Infaq from './component/Infaq';
import Daftar from './component/Daftar';
import Faq from './component/Faq';
import Footer from './component/Footer';

function App() {
  const manfaatRef = useRef(null);
  const daftarRef = useRef(null);

  const handleScrollToManfaat = () => {
    manfaatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToDaftar = () => {
    daftarRef.current?.scrollIntoView({ behavior: 'smooth' }); // ✅ Fungsi untuk scroll ke pendaftaran
  };

  return (
    <>
      <Header onDaftarClick={handleScrollToDaftar} /> {/* ✅ Oper ke Header */}
      <Section01 onMulaiClick={handleScrollToManfaat} />
      <div ref={manfaatRef}>
        <Section02 />
      </div>
      <Section03 />
      <Kelas />
      <Infaq />
      <div ref={daftarRef}> {/* ✅ Bungkus bagian daftar */}
        <Daftar />
      </div>
      <Faq />
      <Footer />
    </>
  );
}

export default App;
