const calcDate = require('./scripts/date');
const rightNow = require('./scripts/date');
const calcHours = require('./scripts/date');

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
      allowNull: false,
      validate: {
        isBefore: rightNow //what it looks like
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
        isAfter: rightNow
      }
    },
    hours: {
      calcHours //function that calculates the hours slept
    },
    restful: {
      type: DataTypes.BOOLEAN,
      allowNull: true //check w/ Diogo
    },
    rested: {
      type: DataTypes.BOOLEAN,
      allowNull: true //check w/ Diogo
    }
  });
  return Sleeps;
};