const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors());
dotenv.config();

//data and port
let ID = 1;

// if (fakeData.length==0) {
//     ID = 1;
// }
// else{
//     let maxID = fakeData.sort((a,b)=>b.id-a.id)[0].id;
//     ID = ++maxID;
// }

// let isLoggedIn = false;
// //login
// app.post("/login",(req,res)=>{
//   isLoggedIn = true;
//   res.send({message:'logged in'})
// })

// //middleware
// app.use((req,res,next)=>{
//   if (!isLoggedIn) {
//     res.status(401).send("unauthorized!");
//     return;
//   }
//   //continue to next if no problem
//   next();
// })

const productsRoute = require('./routes/products.routes');
app.use('/products',productsRoute)
//get all products
// app.get("/products", (req, res) => {
  
//   if (fakeData.length === 0) {
//     res.status(204).send("no content");
//     return;
//   } else {
//     let{name} = req.query;
//     console.log('query: ',name);
//     if (name) {
//       res.send(fakeData.filter((x)=>x.name==name));
//     }
//     res.status(200).send(fakeData);
//     return;
//   }
// });

// //get product by id
// app.get("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const singleData = fakeData.find((data) => data.id === parseInt(id));

//   if (singleData === undefined) {
//     res.status(204).send("data not found 204");
//     return;
//   } else {
//     res.status(200).send(singleData);
//     return;
//   }
// });

// //delete product by id
// app.delete("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const data = fakeData.find((data) => data.id === parseInt(id));
//   if (data === undefined) {
//     res.status(404).send("no such product found!");
//     return;
//   } else {
//     const idx = fakeData.indexOf(data);
//     fakeData.splice(idx, 1);
//     res.status(202).send("product deleted successfully!");
//   }
// });

// //post product
// app.post("/products",bodyParser.json(), (req, res) => {
//   const newProduct = {
//     id: ID,
//     name: req.body.name,
//     price: req.body.price
//   } 
//   fakeData.push(newProduct);
//   ID++;
//   res.status(201).send("data posted successfully");
// });

// //put product
// app.put("/products/:id",(req,res)=>{
//   const{id} = req.params;
//   const{name,price} = req.body;
//   let product = fakeData.find((x)=>x.id==id);
//   if(!product) return res.status(204).send();
//   if(!name && !price){
//     return res.status(400).send({message:'name or price is required!'})
//   }
//   if (name) {
//     product.name = name;
//   }
//   if (price) {
//     product.price = price;
//   }
//     res.send(200).send("product updated successfully!");
//   }
//  )

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`First Node App running on port ${PORT}`);
});
