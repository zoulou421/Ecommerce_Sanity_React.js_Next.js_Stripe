import React from "react";

import Link from 'next/link';
import {urlFor} from '../lib/client';

const FooterBanner = ({footerBanner:{
    discount, largelText1, largelText2, saleTime,
    smallText, midText,desc, product, buttonText, image
} })=>{

	return(
     <div className="footer-banner-container">
        <div className="banner-desc">
           <div className="left">
               <p>{discount}</p>
               <h3>{largelText1}</h3>
               <h3>{largelText2}</h3>
               <p>{saleTime}</p>
            </div>
            <div className="right">
              <h3>{smallText}</h3>
              <h3>{midText}</h3>
              <p>{desc}</p>
              <Link href={`/product/${product}`}>
                  <button type="button">{buttonText}</button>
              </Link>
            </div>
            <img src= {urlFor(image)} 
             className="footer-banner-image"
                 width={400}
                 height={300}
             
            />
        </div>
     </div>
   )
}

export default FooterBanner