module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Product", {
   
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    }

  });
  return Products;
};
