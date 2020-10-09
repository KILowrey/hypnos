// Table of all User's Sleeps
module.exports = function(sequelize, DataTypes) {
  const Sleeps = sequelize.define('Sleeps', {
    userID: {
      // take from profiles.js
    },
    date: {
      // insert function that calls on the previous date rather than this one.
    },
    toBed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isBefore: "" // the current date time
      }
    },
    toSleep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wokeUp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        wakeTime(value) {
          // make sure that they are entering something that is after their toBed time combined with the toSleep time
        }
      }
    },
    restful: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    rested: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
  return Sleeps;
};