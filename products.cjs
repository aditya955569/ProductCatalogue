const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    Name: { type: String },
    Category: { type: String },
    briefDescription: { type: String },
    Description: { type: String },
    Image: { type: String },
    Link: {type:String},
})

const Product = mongoose.model('Product', ProductSchema);

const newProduct1 = new Product({ 
    Name:"Klipsch Synergy Black Label B-200 Bookshelf Speaker Pair with Proprietary Horn Technology,a 5.25” High-Output Woofer and a Dynamic .75” Tweeter for Surrounds or Front Speakers in Black",
    Category:"Electronics",
    briefDescription:"",
    Description:"proeorer",
    Image:"",
    Link:"",
});
newProduct1.save();
const newProduct2 = new Product({ 
    Name:"Klipsch Synergy Black Label B-200 Bookshelf Speaker Pair with Proprietary Horn Technology,a 5.25” High-Output Woofer and a Dynamic .75” Tweeter for Surrounds or Front Speakers in Black",
    Category:"Electronics",
    briefDescription:"",
    Description:"proeorer",
    Image:"",
    Link:"",
});
newProduct2.save();
const newProduct3 = new Product({ 
    Name:"Klipsch Synergy Black Label B-200 Bookshelf Speaker Pair with Proprietary Horn Technology,a 5.25” High-Output Woofer and a Dynamic .75” Tweeter for Surrounds or Front Speakers in Black",
    Category:"Electronics",
    briefDescription:"",
    Description:"proeorer",
    Image:"",
    Link:"",
});
newProduct3.save();
const newProduct4= new Product({ 
    Name:"Klipsch Synergy Black Label B-200 Bookshelf Speaker Pair with Proprietary Horn Technology,a 5.25” High-Output Woofer and a Dynamic .75” Tweeter for Surrounds or Front Speakers in Black",
    Category:"Electronics",
    briefDescription:"",
    Description:"proeorer",
    Image:"",
    Link:"",
});
newProduct4.save();
const newProduct5 = new Product({ 
    Name:"Klipsch Synergy Black Label B-200 Bookshelf Speaker Pair with Proprietary Horn Technology,a 5.25” High-Output Woofer and a Dynamic .75” Tweeter for Surrounds or Front Speakers in Black",
    Category:"Electronics",
    briefDescription:"",
    Description:"proeorer",
    Image:"",
    Link:"",
});
newProduct5.save();
const newProduct6 = new Product({ 
    Name:"Klipsch Synergy Black Label B-200 Bookshelf Speaker Pair with Proprietary Horn Technology,a 5.25” High-Output Woofer and a Dynamic .75” Tweeter for Surrounds or Front Speakers in Black",
    Category:"Electronics",
    briefDescription:"",
    Description:"proeorer",
    Image:"",
    Link:"",
});
newProduct6.save();
const newProduct7 = new Product({ 
    Name:"Klipsch Synergy Black Label B-200 Bookshelf Speaker Pair with Proprietary Horn Technology,a 5.25” High-Output Woofer and a Dynamic .75” Tweeter for Surrounds or Front Speakers in Black",
    Category:"Electronics",
    briefDescription:"",
    Description:"proeorer",
    Image:"",
    Link:"",
});
newProduct7.save();


module.exports=Product;