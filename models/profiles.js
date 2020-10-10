// Table of User's Profile Settings
module.exports = function(sequelize, DataTypes) {
  const Profiles = sequelize.define('Profiles', {
    userID: {
      // generated w/ auth0
    },
    nickname: {
      // taken from auth0?
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Profiles;
};