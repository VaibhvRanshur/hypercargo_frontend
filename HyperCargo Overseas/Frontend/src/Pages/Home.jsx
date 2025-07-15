import React from 'react';
import Background from '../image/background-img3.jpg';

const Home = () => (

  <section className="page">
    <div style={{
     width: "100vw",
    height: "100vh",
    backgroundImage: `url(${Background})`,      
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box"
    }}>
      <p className='background-img-text0'> <span className='highlight0'>Welcome to</span> <span className="highlight">HyperCargo Overseas</span></p>
    <p className='background-img-text1'><span className='highlight0'>Your reliable partner in global trade.</span></p>
    </div>
      <div  className='company-intro'>  
        <h1>Company Introduction</h1>
    <p className='company-intro1'>{`
    At HyperCargo Overseas, we connect quality with global demand—exporting a wide range 
  of premium products to businesses worldwide. With fast, secure logistics, tailored 
  solutions, and a dedicated team by your side, we simplify international trade.Powered 
  by smart technology and end-to-end support, we make global shipping smooth, reliable, 
  and worry-free.
    `}</p>
      <br />
     <div className="page-img">
      <div className="img-box"><img src="/images/whyus1.png" alt="Home 1" /></div>
      <div className="img-box"><img src="/images/ourservice1.png" alt="Home 2" /></div>
      <div className="img-box"><img src="/images/ourproduct1.png" alt="Home 2" /></div>
    </div>
    </div>
  </section>
);

export default Home;