const mongoose=require("mongoose");
const express=require("express");
const fs=require("fs");
const app =express();
const port=3000;
const bodyParser=require("body-parser");
const cors=require("cors");
app.use(bodyParser.json());
app.use(cors());
const Product=require("./products.cjs")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongodb ="mongodb+srv://adityakandpal2016:Tckandpal123@cluster0.hidiazt.mongodb.net/"
mongoose.connect(mongodb);
const UserSchema = new mongoose.Schema({
    Username: { type: String, unique: true },
    Password: {type:String},
    favProducts: {type:Array},
});


const User = mongoose.model('User', UserSchema);

app.post('/register',  async(req, res) => { 
      const { Username, Password } = req.body;
      const user=await User.find({});
      for(var i=0;i<user.length;i++){
        if(user[i].Username==Username){
            res.json("False");
        }
      }
      const hashedPassword =await bcrypt.hash(Password, 10);
      const newUser = new User({ Username, Password: hashedPassword });
      newUser.save();
      res.json("True");
    
  });
 
 app.post('/addToCart/:productId',async(req,res)=>{
  const productId = req.params.productId;
  const {b}=req.body;
  console.log(productId)
  console.log(b);
  console.log("kkk");
  const user = await User.findById(b);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the product is already in the user's favProducts array
        if (!user.favProducts.includes(productId)) {
            // If not, add the product ID to the favProducts array
            user.favProducts.push(productId);
            await user.save();
            return res.json("True");
        } else {
            return res.json("False");
        }
 })
  
 app.get('/products/:productId', async(req, res) => {
    const productId = req.params.productId;
    // Find the product with the given ID
    const product = await Product.findById(productId);
    if(product){
      res.json(product);
    }
    else{
      res.status(404).json({ message: 'Product not found' });
    }
  });

app.post('/login',async(req,res)=>{
    const {Username,Password}=req.body;
    const user = await User.findOne({ Username });
    if (!user) {
      return res.status(404).json('User not found');
    }
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(401).json('Invalid password');
    }
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
})

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, 'secret', async(err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      let user2=await User.findById(user.id);
      req.user = user2;
      const prod=await Product.find({});
      req.prod=prod;
      next();
    });
  };

app.get('/first', authenticateToken, (req, res) => {
    res.json({ user: req.user,prod:req.prod });
  });
app.listen(port);