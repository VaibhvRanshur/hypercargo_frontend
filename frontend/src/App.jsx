  // import { useState } from 'react';
  // import Header from './components/Header.jsx';
  // import Footer from './components/Footer.jsx';
  // import Home from './Pages/Home';
  // import About from './Pages/About';
  // import Products from './Pages/Products';
  // import Contact from './Pages/Contact';
  // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  // import ScrollToTop from './components/ScrollToTop'; 

  // export default function App() {
  //   const [activePage, setActivePage] = useState('home');

  //   const renderPage = () => {
  //     switch (activePage) {
  //       case 'home': return <Home />;
  //       case 'about': return <About />;
  //       case 'products': return <Products />;
  //       case 'contact': return <Contact />;
  //       default: return <Home />;
  //     }
  //   };

  //   return (
  //     <>
  //       <Header setActivePage={setActivePage} activePage={activePage} />
  //       <main>{renderPage()}</main>
  //       <Footer setActivePage={setActivePage} />
  //     </>
  //   );
  // }
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
