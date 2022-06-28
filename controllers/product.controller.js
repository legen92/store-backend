const db = require("../models");

const Product = {
  getAllProducts: async (req, res) => {
    const ProductsAll = await db.Product.findAll();
    res.status(200).json({ message: "get all Product success", ProductsAll });
  },
  getOneProduct: async (req, res) => {
    const id = req.params.id;
    const found = await db.Products.findOne({ where: { id } });
    if (!found) {
      return res.status(404).json({ message: "data invalid" });
    }
    res
      .status(200)
      .json({ message: "get a Product success", Product: found.dataValues });
  },
  createOneProduct: async (req, res) => {
    const { title, author } = req.body;
    const newProduct = await db.Products.create({ title, author });
    res.status(201).json({ message: "create a Product success", newProduct });
  },
  updateOneProduct:async(req,res)=>{
    const id = req.params.id;
    const {title} =req.body
    const found = await db.Products.findOne({ where: { id } });
    if (!found) {
        return res.status(404).json({ message: "data invalid" });
      }
    await db.Products.update({title},{where:{title:found.dataValues.title}})
    res.status(200).json({message: "update a Product success"})
  },
  deleteOneProduct : async(req,res)=>{
    const id = req.params.id;
    const found = await db.Product.findOne({ where: { id } });
    if (!found) {
        return res.status(404).json({ message: "data invalid" });
      }
    await db.Products.destroy({where:{id:found.id}})
    res.status(200).json({message: "delete a Product success"})
  }
};

module.exports = Product;
