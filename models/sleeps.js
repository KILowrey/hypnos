const calcDate = require('./middleware/date');
const rightNow = require('./middleware/date');
const calcHours = require('./middleware/date');

// Table of all User's Sleeps
module.exports = function(sequelize, DataTypes) {
  const Sleeps = sequelize.define('Sleeps', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    userID: { //talk to TA 'bout this
      type: DataTypes.BIGINT,
      references: 'Profiles', //Table name
      referencesKey: 'id' //column name
    },
    date: {
      calcDate //finds yesterday and displays as string
    },
    toBed: {
      type: DataTypes.STRING,
      validate: {
        isBefore: rightNow //what it looks like
      }
    },
    toSleep: {
      type: DataTypes.STRING,
    },
    wokeUp: {
      type: DataTypes.STRING,
      validate: {
        isAfter: rightNow
      }
    },
    hours: {
      calcHours // TODO function that calculates the hours slept
    },
    restful: {
      type: DataTypes.BOOLEAN,
    },
    rested: {
      type: DataTypes.BOOLEAN,
    }
  });
  return Sleeps;
};