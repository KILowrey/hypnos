// Table of User's Profile Settings
module.exports = function(sequelize, DataTypes) {
  const UserProfile = sequelize.define('UserProfile', {
    userID: {
      // take from users.js
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // insert validation here
      }
    },
    age: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
      // insert validation here
      }
    },
    average: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {

      }
    }
  });
  return UsersProfile;
};