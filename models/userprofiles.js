const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const UserProfiles = sequelize.define('UserProfiles',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: {
        //     len:
        // }

    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'Gardener'

    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'none'
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false

    },
    geocode: {
        type: Sequelize.STRING

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
        

    },
    avatar:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'flower'


    },
    intro: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'an empty plot...'

    },
    hasGarden: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false

    },
    availableTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5

    },
    organic: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    flowers:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    tomatoes:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    cucumbers:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    sweetPeppers: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    beans:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    peas: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    carrots: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    squash:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    lettuce:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    watermelon:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    onion:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    sweetCorn:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    cabbage:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    potatoes:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    radishes:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    mint:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    basil:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    cilantro:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    beets:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    zucchini:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    broccoli:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    other:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    }

},{
    freezeTableName: true
});
userprofiles.sync();

module.exports = UserProfiles;