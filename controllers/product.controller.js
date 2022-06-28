const db = require("../models");

const Product = {
  findAndCountAll: async (req, res) => {
    let { offset, limit } = req.query;
    offset = typeof offset === "string" ? parseInt(offset) : offset;
    limit = typeof limit === "string" ? parseInt(limit) : limit;
    try {
      const { count, rows } = await db.Products.findAndCountAll({
        offset: offset,
        limit: limit,
      });
      res.json({
        count: count,
        rows,
      });
    } catch (error) {
      return res.status(500).json("server error");
    }
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
    const data = req.body;
    const newProduct = await db.Products.create(data);
    res.status(201).json({ message: "create a Product success", newProduct });
  },
  updateOneProduct: async (req, res) => {
    const id = req.params.id;
    const { title } = req.body;
    const found = await db.Products.findOne({ where: { id } });
    if (!found) {
      return res.status(404).json({ message: "data invalid" });
    }
    await db.Products.update({ title }, { where: { id } });
    res.status(200).json({ message: "update a Product success" });
  },
  deleteOneProduct: async (req, res) => {
    const id = req.params.id;
    const found = await db.Products.findOne({ where: { id } });
    if (!found) {
      return res.status(404).json({ message: "data invalid" });
    }
    await db.Products.destroy({ where: { id: found.id } });
    res.status(200).json({ message: "delete a Product success" });
  },
};

module.exports = Product;
