// Table of User's Profile Settings
module.exports = function(sequelize, DataTypes) {
  const Profiles = sequelize.define('Profiles', {
    id: { //talk to TA 'bout this
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    age: {
      type: DataTypes.STRING,
    }
  });
  return Profiles;
};