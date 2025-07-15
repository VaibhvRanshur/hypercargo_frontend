// export default function Header({ setActivePage, activePage }) {
  
//   return (
//     <header className="header">
//       <img src="/images/company-logo.png" alt="Logo" className="logo" />
//       <nav>
//         <ul>
//           <li><button onClick={() => setActivePage('home')} className={activePage==='home' ? 'active' : ''}>Home</button></li>
//           <li><button onClick={() => setActivePage('about')} className={activePage==='about' ? 'active' : ''}>About</button></li>
//           <li><button onClick={() => setActivePage('products')} className={activePage==='products' ? 'active' : ''}>Products</button></li>
//           <li><button onClick={() => setActivePage('contact')} className={activePage==='contact' ? 'active' : ''}>Contact</button></li>
//         </ul>

//       </nav>
//     </header>
//   );
// }

import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className="header">
      <img src="/images/company-logo.png" alt="Logo" className="logo" />

      <nav className="tabs">
        <Link to="/" className="tab">Home</Link>
        <Link to="/products" className="tab">Products</Link>
        <Link to="/about" className="tab">About</Link>
        <Link to="/contact" className="tab">Contact</Link>
      </nav>
    </div>
  );
}
