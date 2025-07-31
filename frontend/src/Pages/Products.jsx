
import React from 'react';
import ProductCard from '../components/ProductCard';
// import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <div className='products-page-div'>
       <p className='products-Sub-heading'> <span className='product-subhead-title'>Note :</span> We Can Source Any Product You Need
        At HyperCargo Overseas, we believe in putting your needs first. No matter what product you're looking for — big or small, common or rare — we’ll make it happen.
        If you need it, we’ll find it and deliver it.</p>
       <h2 className='product-showcase'>Product Showcase</h2>
       <p className='products-Sub-heading'>At HyperCargo Overseas, we’re all about bringing you quality products you can trust. We take care to ensure everything is fresh, 
          carefully handled, and delivered right on time.</p>
      </div>
      <div className="products-page">
        <ProductCard
        image="/images/Coffee1.jpg"
        title="Coffee Beans"
        origin="Origin:"
        originDescription="Karnataka & Kerala"
        type="Type"
        typeDescription="Arabica & Robusta"
        form="Form:"
        formDescription="Green Beans / Roasted Beans / Powder"
        highlights="Highlights:"
        highlightsPoint1='•	Premium-grade beans, handpicked & sun-dried'
        highlightsPoint2='•	Strong aroma, full body, and global roast compatibility'
        highlightsPoint3= '• Available in green or roasted form'
        highlight = "Ideal For :"
        highlightsPoint6= 'Coffee roasters, cafes, specialty blends'
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
        highlight = "Ideal For :"
        highlightsPoint6= 'Tea importers, wellness brands, private labels'reverse
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
        highlightsPoint3='•  Fine, moisture-free powder'
        highlightsPoint4='•  Easy to mix, hygienically processed'
        highlightsPoint5='•  Great for baking, beverages & bulk supply'
        highlight = "Ideal For :"
        highlightsPoint6= 'Organic stores, ethnic food chains'
      />

      <ProductCard
        image="/images/chillypowder1.jpg"
        title="Red Chilli"
        origin="Origin:"
        originDescription="Guntur & Byadgi"
        form="Form:"
        formDescription="Dry/Powder"
        verities="Varieties:"
        vertiesDescription="Sannam S4, Teja, Byadgi"
        highlights="Highlights:"
        highlightsPoint1='• Deep red color, fiery heat, sun-dried purity'
        highlightsPoint2= '• Sorted and graded as per global standards'
        highlight = "Ideal For :"
        highlightsPoint6= ' Spice processors, food manufacturers'
        reverse
      />

  

      <ProductCard
        image="/images/Turmericpowder.jpg"
        title="Turmeric Powder"
        origin="Origin:"
        originDescription="Erode & Sangli"
        form="Curcumin:"
        formDescription="Up to 5%"
        highlights="Highlights:"
        highlightsPoint1='•	Strong aroma, vibrant yellow, high curcumin'
        highlightsPoint2= '•	Lab-tested & export-quality grinding'
        highlight = "Ideal For :"
        highlightsPoint6= 'Wellness brands, spice traders, pharma buyers'/>
      </div>
      
    </div>
  );
};

export default Products;
