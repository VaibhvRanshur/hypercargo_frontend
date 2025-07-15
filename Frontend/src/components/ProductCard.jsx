// export default function ProductCard({ image, title, description }) {
//   return (
//     <div className="product-card">
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }
import React from 'react';

const ProductCard = ({ image, title, origin, originDescription, form, formDescription,highlight, highlights,highlightsPoint1,highlightsPoint2,highlightsPoint3, highlightsPoint4,reverse }) => (
  <div className={`product-card${reverse ? ' reverse' : ''}`}>
    <img src={image} alt={title} />
      <div className="product-info">
           <div className='product-head'>
            <h1 >{title}</h1>
           </div>
        <h4 className='product-d-headings'>{origin}</h4>
        <p>{originDescription}</p>
        <h4 className='product-d-headings'>{form}</h4>
        <p>{formDescription}</p>
        <h4 className='product-d-headings'>{highlights}</h4>
        <p>{highlightsPoint1}</p>
        <p>{highlightsPoint2}</p>
        <p>{highlightsPoint3}</p>
        <h4 className='product-d-headings'>{highlight}</h4>
        <p>{highlightsPoint4}</p>
        </div>
  </div>
);

export default ProductCard; 