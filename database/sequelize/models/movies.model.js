module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
      Title: {
        type: Sequelize.STRING
      },
      Director: {
        type: Sequelize.STRING
      },
      Release: {
        type: Sequelize.DATE
      },
      Cast: {
        type: Sequelize.STRING
      },
      Origin: {
        type: Sequelize.STRING
      }
    });
  
    return Movie;
  };