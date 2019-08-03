const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Connections = sequelize.define('Connections',{
    userInitiating: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    userReceiving:{
        type: Sequelize.INTEGER,
        allowNull: false


    },
    accepted: {
        type: Sequelize.BOOLEAN,
        default: false
    }
},
{
    freezeTableName: true
});

Connections.sync();

module.exports = Connections;