module.exports = (sequelize,DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  });
  return User;
};
