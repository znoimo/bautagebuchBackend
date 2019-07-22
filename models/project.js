'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    corporation: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.Diary, {
      foreignKey: 'projectId',
      as: 'diaries',
    });
  };
  return Project;
};