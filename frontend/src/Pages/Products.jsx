// import React from 'react';
// import ProductCard from '../components/ProductCard';


// const Products = () => (
//   <section className="content active">

//     <h1>Our Products</h1>

//     <ProductCard 
//     image="./images/Coffee1.jpg" 
//     title="Coffee Beans" 
//     description="" />

//     <ProductCard 
//     image="./images/jaggery1.jpg" 
//     title="Jaggery" 
//     description="" reverse />

//     <ProductCard 
//     image="./images/chillypowder1.jpg" 
//     title="Redchilly Powder" 
//     description=""/>

//     <ProductCard 
//     image="./images/tea.jpg"
//     title="Turmericpowder1" 
//     description="" reverse />

//     <ProductCard 
//     image="./images/Turmericpowder.jpg" 
//     title="Coffee" 
//     description=""/>
    
//   </section>
// );

// export default Products;

// import React from 'react';
// import ProductCard from '../components/ProductCard';


// const Products = () => {
//   return (
//     <div className="products-page">
//       <h1 className="products-heading">Our Products</h1>

// <pre className="products-heading" >{`Lorem ipsum dolor sit amet consectetur adipisicing elit.
//    Quo delectus vel consequuntur nobis distinctio placeat exercitationem molestias eum, 
//    libero laudantium ab ratione officia quod quis dolorum obcaecati voluptatem sit. Inventore?`}</pre>


//       <ProductCard
//         image="/images/Coffee1.jpg"
//         title="Coffee"
//         description={`Origin: Karnataka & Kerala 
// Type: Arabica & Robusta
// Form: Green Beans / Roasted Beans / Powder
// Highlites:-
// - Premium-grade beans, handpicked & sun-dried
// - Strong aroma, full body, and global roast compatibility
// - Available in green or roasted form
// Ideal For: Coffee roasters, cafes, specialty blends`}
//       />

//       <ProductCard
//         image="/images/tea.jpg"
//         title="Tea"
//         description={`Origin: Assam & Darjeeling  
// Type: Black, Green, Orthodox & CTC
// Highlites:-
// - Bold flavor, rich aroma, high antioxidant content
// - Garden-fresh, carefully packed for global freshness
// Ideal For: Tea importers, wellness brands, private labels`}reverse
//       />

//       <ProductCard
//         image="/images/jaggery1-solid.jpg"
//         title="Jaggery "
//         description={`Origin: Maharashtra & Uttar Pradesh 
// Form: Blocks / Cubes / Cones / Powder
// Highlites:-
// - 100% natural, chemical-free sweetener
// - Rich in minerals, great shelf life
// Ideal For: Organic stores, ethnic food chains`}
//       />

//       <ProductCard
//         image="/images/chillypowder1.jpg"
//         title="Red cilly Dry / Powder"
//         description={`Origin: Guntur & Byadgi 
// Varieties: Sannam S4, Teja, Byadgi
// Highlites:-
// - Deep red color, fiery heat, sun-dried purity
// - Sorted and graded as per global standards
// Ideal For: Spice processors, food manufacturers`}reverse
//       />

      

//       <ProductCard
//         image="/images/Turmericpowder.jpg"
//         title="Turmeric Powder"
//         description={`Origin: Erode & Sangli 
// Curcumin: Up to 5%
// Highlites:-
// - Strong aroma, vibrant yellow, high curcumin
// - Lab-tested & export-quality grinding
// Ideal For: Wellness brands, spice traders, pharma buyers`}
//       />
//     </div>
//   );
// };

// export default Products;

import React from 'react';
import ProductCard from '../components/ProductCard';
// import './Products.css';

const Products = () => {
  return (
    <div>
      <div>
        <h2 className='product-head'>Note :</h2>
       <p className='products-Sub-heading'> We Can Source Any Product You Need
At HyperCargo Overseas, we believe in putting your needs first. No matter what product you're looking for — big or small, common or rare — we’ll make it happen.
If you need it, we’ll find it and deliver it.</p>
      </div>
      <div className="products-page">
        <ProductCard
        image="/images/Coffee1.jpg"
        title="Coffee "
        origin="Origin:"
        originDescription="Karnataka & Kerala"
        form="form:"
        formDescription="Green Beans / Roasted Beans / Powder"
        highlights="Highlights:"
        highlightsPoint1='•	Premium-grade beans, handpicked & sun-dried'
        highlightsPoint2='•	Strong aroma, full body, and global roast compatibility'
        highlightsPoint3= '• Available in green or roasted form'
        highlight = "Idle For:"
        highlightsPoint4= 'Coffee roasters, cafes, specialty blends'
      />

      <ProductCard
        image="/images/tea.jpg"
        title="Tea"
        origin="Origin:"
        originDescription="Assam & Darjeeling"
        form="Type:"
        formDescription="Black, Green, Orthodox & CTC"
        highlights="Highlights:"
        highlightsPoint1='•	Bold flavor, rich aroma, high antioxidant content'
        highlightsPoint2='•	Garden-fresh, carefully packed for global freshness'
        highlight = "Idle For:"
        highlightsPoint4= 'Tea importers, wellness brands, private labels'reverse
      />

         <ProductCard
        image="/images/jaggery1-solid.jpg"
        title="Jaggery"
        origin="Origin:"
        originDescription="Maharashtra & Uttar Pradesh"
        form="Form:"
        formDescription="Blocks / Cubes / Cones / Powder"
        highlights="Highlights:"
        highlightsPoint1='•	100% natural, chemical-free sweetener'
        highlightsPoint2='•	Rich in minerals, great shelf life'
        highlight = "Idle For:"
        highlightsPoint4= 'Organic stores, ethnic food chains'
      />

      <ProductCard
        image="/images/chillypowder1.jpg"
        title="Red Chilly ( Dry / Powder )"
        origin="Origin:"
        originDescription="Guntur & Byadgi"
        form="form:"
        formDescription="Dry/Powder"
        verities="Varieties:"
        vertiesDescription="Sannam S4, Teja, Byadgi"
        highlights="Highlights:"
        highlightsPoint1='• Deep red color, fiery heat, sun-dried purity'
        highlightsPoint2= '• Sorted and graded as per global standards'
        highlight = "Idle For:"
        highlightsPoint4= 'Ideal For: Spice processors, food manufacturers'
        reverse
      />

  

      <ProductCard
        image="/images/Turmericpowder.jpg"
        title="Turmeric Powder:"
        origin="Origin:"
        originDescription="Erode & Sangli"
        form="Curcumin:"
        formDescription="Up to 5%"
        highlights="Highlights:"
        highlightsPoint1='•	Strong aroma, vibrant yellow, high curcumin'
        highlightsPoint2= '•	Lab-tested & export-quality grinding'
        highlight = "Idle For:"
        highlightsPoint4= 'Wellness brands, spice traders, pharma buyers'/>
      </div>
      
    </div>
  );
};

export default Products;
