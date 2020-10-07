// Table of all User's Sleeps
module.exports = function(sequelize, DataTypes) {
  const UserSleep = sequelize.define('UserSleep', {
    userID: {
      // take from users.js
    },
    date: {
      // TODO: figure out how we determine dates
    },
    toBed: {
      // insert what time they went to bed
    },
    toSleep: {
      // insert what time they estimate want to sleep
    },
    wokeUp: {
      // insert what time they woke up
    },
    fullvless: {
      // restful vs restless
    },
    wellvtired: {
      // insert wellrested vs tired
    }
  });
  return UsersSleep;
};