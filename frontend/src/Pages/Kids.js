import React from 'react';
import "./CSS/products.css"
import prod1 from '../Components/Assets/kk2.jpg';
import prod2 from '../Components/Assets/kk1.jpg';
import prod3 from '../Components/Assets/kk3.jpg';
import prod4 from '../Components/Assets/kk4.jpg';
import prod5 from '../Components/Assets/kk5.jpg';
import prod6 from '../Components/Assets/kk6.jpg';
import prod7 from '../Components/Assets/kk7.jpg';
import prod8 from '../Components/Assets/kk8.jpg';
import prod9 from '../Components/Assets/kk9.jpg';


import axios from 'axios';
const Kids = () => {
    const add = async () => {
        try {
          let apiData = {
            category: "men",
            item: "product",
            price: "19.99",
          };
          const response = await axios.post('http://localhost:4000/item', { 
            category: "kids",
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
      <h1>New Winter Collection For Kids</h1>
      <div class="container">
        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 1" />
            </div>
            <h2>Kids Sweater</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">699.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod2} alt="Product 2" />
            </div>
            <h2>Kids Jacket </h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">899.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod3} alt="Product 3" />
            </div>
            <h2>Kid's Winter Set</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear.</p>
            <span class="price">429.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod4} alt="Product 4" />
            </div>
            <h2>Girl's Trendy Winter Wear</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">289.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod5} alt="Product 5" />
            </div>
            <h2>Boy's Trendy Winter Wear</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">999.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod6} alt="Product 6" />
            </div>
            <h2>Boy's Trendy Winter Wear</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">429.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>
        <div class="product">
            <div class="img_box">
                <img src={prod7} alt="Product 4" />
            </div>
            <h2>Girls's Trendy Winter Wear</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">729.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod8} alt="Product 5" />
            </div>
            <h2>boy's Shoes</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">969.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod9} alt="Product 6" />
            </div>
            <h2>Hat and Pant Combo</h2>
            <p> Keep Your Kids Warm and Comfy with Kids' Winter Wear</p>
            <span class="price">779.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>



    </div>
    </div>
  );
}

export default Kids;
