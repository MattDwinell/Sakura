const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Messages = sequelize.define('Messages', {
    userInit: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    userReceiving: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    message: {
        type: Sequelize.TEXT,
        allowNull: false

    }

},
    {
        freezeTableName: true
    });

Messages.sync();

module.exports = Messages;