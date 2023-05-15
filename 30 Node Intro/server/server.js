const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 8080;
let ID = undefined;
const fakeData = [
    {
        id: 1,
        name: 'Pepsi',
        price: 1.6
    }
];
if (fakeData.length==0) {
    ID = 1;
}
else{
    let maxID = fakeData.sort((a,b)=>b.id-a.id)[0].id;
    ID = ++maxID;
}

//get all products
app.get("/products", (req, res) => {
  if (fakeData.length === 0) {
    res.status(204).send("no content");
    return;
  } else {
    res.status(200).send(fakeData);
    return;
  }
});
//get product by id
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const singleData = fakeData.find((data) => data.id === parseInt(id));

  if (singleData === undefined) {
    res.status(204).send("data not found 204");
    return;
  } else {
    res.status(200).send(singleData);
    return;
  }
});

//delete product by id
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const data = fakeData.find((data) => data.id === parseInt(id));
  if (data === undefined) {
    res.status(404).send("no such product found!");
    return;
  } else {
    const idx = fakeData.indexOf(data);
    fakeData.splice(idx, 1);
    res.status(202).send("product deleted successfully!");
  }
});

//post product
app.post("/products", (req, res) => {
  const newProduct = {
    id: ID,
    name: req.body.name,
    price: req.body.price
  } 
  fakeData.push(newProduct);
  ID++;
  res.status(201).send("data posted successfully");
});

app.listen(PORT, () => {
  console.log(`First Node App running on port ${PORT}`);
});
