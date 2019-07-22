'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    text: DataTypes.STRING,
    weather: DataTypes.STRING,
    memoPath: DataTypes.STRING,
    fotoPath: DataTypes.STRING
  }, {});
  Entry.associate = function(models) {
    // associations can be defined here
    Entry.belongsTo(models.Diary,{
      foreignKey: 'diaryId',
      onDelete: 'CASCADE',
    });
  };
  return Entry;
};