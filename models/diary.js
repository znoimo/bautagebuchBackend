'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define('Diary', {
    date: DataTypes.DATE
  }, {});
  Diary.associate = function(models) {
    // associations can be defined here
    Diary.belongsTo(models.Project,{
      foreignKey: 'projectId',
      onDelete: 'CASCADE',
    });
    Diary.hasMany(models.Entry, {
      foreignKey: 'diaryId',
      as: 'entries',
    });
  };
  return Diary;
};