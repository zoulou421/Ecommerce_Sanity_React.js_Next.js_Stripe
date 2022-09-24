import React, {Component} from 'react'


const Home= () => {
  return(
    <div>
     HeroBanner
     <div>
        <h2>Best Sellin product</h2>
        <p>Speak of my variations</p>
     </div>

     <div>
        {['Product 1', 'Product 2'].map((product)=>product

        )}
     </div>
     
    </div>
  )
}
export default Home;