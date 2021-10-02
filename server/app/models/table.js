module.exports = (sequelize, Sequelize) => {
    const Table = sequelize.define("table", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Table;
  };