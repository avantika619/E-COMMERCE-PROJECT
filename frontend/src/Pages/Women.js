import React from 'react';
import "./CSS/products.css"
import prod1 from  '../Components/Assets/ww1.jpg';
import prod2 from  '../Components/Assets/ww2.jpg';
import prod3 from  '../Components/Assets/ww3.jpg';
import prod4 from  '../Components/Assets/ww4.jpg';
import prod5 from  '../Components/Assets/ww5.jpg';
import prod6 from  '../Components/Assets/ww6.jpg';
import prod7 from  '../Components/Assets/ww7.jpg';
import prod8 from  '../Components/Assets/ww8.jpg';
import prod9 from  '../Components/Assets/ww9.jpg';
import prod10 from '../Components/Assets/ww10.jpg';


import axios from 'axios';

const Women = () => {
    const add = async () => {
        try {
          let apiData = {
            category: "men",
            item: "product",
            price: "19.99",
          };
          const response = await axios.post('http://localhost:4000/item', { 
            category: "women",
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
      <h1>NEW ARRIVALS ONLY FOR WOMENS </h1>
      <div class="container">
        <div class="product">
            <div class="img_box">
                <img src={prod1} alt="Product 1" />
            </div>
            <h2>High-neck cable knits</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">719.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod3} alt="Product 2" />
            </div>
            <h2>High-neck cable knits</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">629.99</span>
            <button  onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod4} alt="Product 3" />
            </div>
            <h2>Top and Bottom Winter Wear</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">579.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod5} alt="Product 4" />
            </div>
            <h2>Trendy Mufflers & Caps</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">889.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>
        <div class="product">
            <div class="img_box">
                <img src={prod2} alt="Product 2" />
            </div>
            <h2>High-neck cable knits</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">429.99</span>
            <button  onClick={()=>add()}>Add to Cart</button>
        </div>
        <div class="product">
            <div class="img_box">
                <img src={prod6} alt="Product 5" />
            </div>
            <h2>Trendy Mufflers & Caps</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">787.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod7} alt="Product 6" />
            </div>
            <h2>Women's Pants</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">659.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>
        <div class="product">
            <div class="img_box">
                <img src={prod8} alt="Product 5" />
            </div>
            <h2>Women's Comfy Pants</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">889.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>

        <div class="product">
            <div class="img_box">
                <img src={prod9} alt="Product 6" />
            </div>
            <h2>Women's Pants</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">769.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>
        
        <div class="product">
            <div class="img_box">
                <img src={prod10} alt="Product 6" />
            </div>
            <h2>Women's Pants</h2>
            <p>These one-and-done outfits are eye-catching and great for making a style</p>
            <span class="price">479.99</span>
            <button onClick={()=>add()}>Add to Cart</button>
        </div>
        
        


    </div>

    </div>
  );
}

export default Women;
