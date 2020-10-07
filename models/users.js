// Table of User ID's taken from Auth0
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('Users', {
    userID: {
      // take the user's id from AUTH0
    }
  });
  return Users;
};