import React from 'react';

const Home = () => (

  <section className="page">
    <div className="home-hero">
      <p className='background-img-text0'>
        <span className='highlight0'>Welcome to</span>
        <span className="highlight"> HyperCargo Overseas</span>
      </p>
      <p className='background-img-text1'>
        <span className='highlight0'>Your reliable partner in global trade.</span>
      </p>
    </div>
    <div  className='company-intro'>
      <div>
        <h1  className='company-intro-head'>Company Introduction</h1>
       </div> 
      <p className='company-intro-subhead'>
         At HyperCargo Overseas, we connect quality with global demand—exporting a wide range 
         of premium products to businesses worldwide. With fast, secure logistics, tailored 
         solutions, and a dedicated team by your side, we simplify international trade.Powered 
         by smart technology and end-to-end support, we make global shipping smooth, reliable, 
         and worry-free.
      </p>
    </div>
    <div className="page-img">
      <div className="img-box"><img src="/images/whyus1.png" alt="Why Us" /></div>
      <div className="img-box"><img src="/images/ourservice1.png" alt="Our Service" /></div>
      <div className="img-box"><img src="/images/ourproduct1.png" alt="Our Product" /></div>
    </div>
  </section>
);

export default Home;