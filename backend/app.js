// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
 app.use(express.json())

 
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define a simple Mongoose model
const Todo = mongoose.model('cart', {
  category: String,
  item:String,
  price:String

});

// Express route to get all todos
app.post('/item', async (req, res) => {
  try {
        const data=req.body;

        let obj={
            category:data.category,
            item:data.item,
            price:data.price
        }

        const data1= await Todo.create(obj);

        res.status(201).json({success:true,data:data1})
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

app.get('/get', async(req,res)=>{
    try {
        const data= await Todo.find();

        res.status(200).json({success:true,data:data})
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
})

app.get('/count', async(req,res)=>{
    try {
        const data= await Todo.countDocuments();

        res.status(200).json({success:true,data:data})
    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
})

// Start the Express server
app.listen(4000, () => {
  console.log("server is running");
});
