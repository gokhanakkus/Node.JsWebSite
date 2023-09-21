const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

const data = [
    {id: 1, name:"iphone 13", price: 30000, imageUrl:"1.jpeg", isActive: true},
    {id: 2, name:"iphone 14", price: 40000, imageUrl:"2.jpeg", isActive: true},
    {id: 3, name:"iphone 15", price: 50000, imageUrl:"3.jpeg", isActive: true}
];

//route yapısı

app.use("/products/:id", function(req, res){
    // res.send("products details" + req.params.id);
    const urun = data.find(u => u.id == req.params.id);
    res.render("product-details", urun);  
});

app.use("/products", function(req, res){
    res.render("products",{
        urunler: data
    } );
});

app.use("/", function(req, res){
    res.render("index");
});

app.listen(3000, () =>{
    console.log("listening on post 3000");
});