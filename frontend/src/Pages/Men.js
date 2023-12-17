import React from 'react';
import "./CSS/products.css"
import prod1 from '../Components/Assets/mm2.jpg';
import prod3 from '../Components/Assets/mm3.jpg';
import prod4 from '../Components/Assets/mm4.jpg';
import prod5 from '../Components/Assets/mm5.jpg';
import prod6 from '../Components/Assets/mm6.jpg';
import prod7 from '../Components/Assets/mm7.jpg';
import prod8 from '../Components/Assets/mm8.jpg';
import prod9 from '../Components/Assets/mm9.jpg';
import prod10 from '../Components/Assets/mm10.jpg';
import axios from 'axios';
const Men = () => {
    const add = async () => {
        try {
          let apiData = {
            category: "men",
            item: "product",
            price: "19.99",
          };
          const response = await axios.post('http://localhost:4000/item', { 
            category: "men",
            item: "product",
            price: "19.99",
           });
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error.message || 'Network Error');
        }
      };
      

  return (
    <div>
      <h1>NEW ARRIVALS ONLY FOR MENS</h1>
      <div class="container">
        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 1" />
            </div>
            <h2>Men's Trendy & Comfy Pants</h2>
            <p> Trendy WEAR FOR MEN </p>
            <span class="price">1299.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        
        <div class="product">
            <div class="img_box">
                <img src={prod3} alt="Product 3" />
            </div>
            <h2>Men's Trendy & Comfy Pants</h2>
            <p>Trendy WEAR FOR MEN </p>
            <span class="price">1529.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod4} alt="Product 4" />
            </div>
            <h2>Men's Trendy & Comfy Shirts</h2>
            <p>Trendy WEAR FOR MEN </p>
            <span class="price">1629.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>  

        <div class="product">
            <div class="img_box">
                <img src={prod5} alt="Product 5" />
            </div>
            <h2>Trendy Shirts</h2>
            <p>Trendy WEAR FOR MEN </p>
            <span class="price">829.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod6} alt="Product 6" />
            </div>
            <h2>Men's Trendy & Comfy Shirts</h2>
            <p>Trendy WEAR FOR MEN </p>
            <span class="price">999.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>
        <div class="product">
            <div class="img_box">
                <img src={prod7} alt="Product 7" />
            </div>
            <h2>Black & Grey  Pullovers</h2>
            <p>Trendy WEAR FOR MEN .</p>
            <span class="price">929.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod8} alt="Product 8" />
            </div>
            <h2>Black Pullovers </h2>
            <p>Trendy WEAR FOR MEN </p>
            <span class="price">799.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod9} alt="Product 9" />
            </div>
            <h2>Men's Pullovers</h2>
            <p>Trendy WEAR FOR MEN </p>
            <span class="price">629.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod10} alt="Product 10" />
            </div>
            <h2>Black Pullovers</h2>
            <p>Trendy WEAR FOR MEN </p>
            <span class="price">729.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

    


    </div>
    
    </div>
  );
}

export default Men;
