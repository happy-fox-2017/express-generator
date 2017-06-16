'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    is_complete: DataTypes.BOOLEAN,
    usersId: DataTypes.INTEGER
  })
  Todo.associate = function(models) {
    Todo.belongsTo(models.User, {foreignKey: "usersId"})
  }
  return Todo;
  
};

