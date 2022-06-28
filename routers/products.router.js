const express = require("express");
const db = require("../models/index");
const Product = require("../controllers/product.controller");
const verifyToken = require("../middleware/verifyToken");
const { faker } = require("@faker-js/faker");

const productRouter = express.Router();

//get products 
productRouter.get("/", Product.findAndCountAll);

//get one product

productRouter.get("/:id", Product.getOneProduct);

//create one product
productRouter.post("/", Product.createOneProduct);

//update one product
productRouter.put("/:id", Product.updateOneProduct);

//delete one product
productRouter.delete("/:id", Product.deleteOneProduct);

productRouter.post("/fake", async (req, res) => {
  const arr = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109,
      description:
        "Your perfect pack for everyday use and walks in the forest",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22,
      description:
        "Slim-fitting style, contrast raglan long sleeve includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55,
      description:
        "great husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15,
      description:
        "The color could be slightly different between  practice. ",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Coller dragon that protects the ocean's pearl. .",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Retchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. ...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data tperating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, ssed d inter",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55  III 2.5",
      price: 109,
      description:
        "3D NAND flash are applcommaand enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming exgh capacity, ",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPgy. ",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming ",
      price: 999,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED  calibration ",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56,
      description:
        "Note:The Jackets is ol andeedelp you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable  Jacket",
      price: 29,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTENOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39,
      description:
        "Lightweight perfet ith Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not ",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7,
      description:
        "100% Polyester, Machine wash, 1d Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12,
      description:
        "95%Cotton,5%Spandex, Features: Camn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
  ];

  // for (let i = 0; i < 10; i++) {
  //   const products = {
  //     title: faker.commerce.product(),
  //     image: faker.image.fashion(),
  //     price: faker.commerce.price(100, 200, 0, "$"),
  //   };
  //   arr.push(products);
  // }
  const products = await db.Products.bulkCreate(arr);
  res.json(products);
});

module.exports = productRouter;
