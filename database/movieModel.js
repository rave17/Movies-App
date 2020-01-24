const dbConfig = require('./sequelize/sequelize.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const movieModel = {};

movieModel.Sequelize = Sequelize;
movieModel.sequelize = sequelize;

movieModel.movies = require("./sequelize/models/movies.model")(sequelize, Sequelize);

module.exports = movieModel;