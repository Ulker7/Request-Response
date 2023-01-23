const express = require("express");

const app = express();

const products = [
    {
        id: 111,
        name: "Product 1",
        price: 30,
        quantity: 500
    },
    {
        id: 112,
        name: "Product 2",
        price: 8,
        quantity: 2000
    },
    {
        id: 113,
        name: "Product 3",
        price: 10,
        quantity: 30
    },
    {
        id: 114,
        name: "Product 4",
        price: 5,
        quantity: 4000
    },
    {
        id: 115,
        name: "Product 5",
        price: 3,
        quantity: 6000
    },
    {
        id: 116,
        name: "Product 6",
        price: 500,
        quantity: 80
    },
    {
        id: 117,
        name: "Product 7",
        price: 30,
        quantity: 100
    },
    {
        id: 118,
        name: "Product 8",
        price: 20,
        quantity: 55
    },
    {
        id: 119,
        name: "Product 9",
        price: 10,
        quantity: 75
    },
    {
        id: 120,
        name: "Product 10",
        price: 7,
        quantity: 23
    },
]

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/products", (req, res) => {
    const count = +req.query.count;
    const offset = +req.query.offset;
    
    if (count && offset) {
        res.send(products.slice(offset, offset + count));
      } else if (count) {
        res.end();
      } else if (offset) {
        res.end();
      } else {
        res.send(products);
      }
})

app.get("/products/:id", (req, res) => {
    const product = products.find(item => item.id == req.params.id);
    if (!product) {
        res.status(404).send();
      }
    res.send(product);
})


app.listen(8000, () => {
    console.log("Server started...");
})