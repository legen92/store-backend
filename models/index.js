const {Sequelize,DataTypes} = require("sequelize");
const {
  database,
  password,
  user,
  host,
  dialect,
} = require("../config/db.config");


const sequelize = new Sequelize({
  database: database,
  username: user,
  password,
  host: host,
  port: 5432,
  dialect: dialect,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }, 
  },
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./users.model')(sequelize,DataTypes)
db.Book = require('./books.model')(sequelize,DataTypes)

db.User.sync()
db.Book.sync()
module.exports = db;