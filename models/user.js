'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING
  })
  User.associate = function(models) {
    User.hasMany(models.Todo)
  }
  return User;
};