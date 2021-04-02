const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}

// fields/columns for Post model
Post.init (
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true

        }, 
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                isURL: true
            }
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: 'user',
                key: 'id'
            }
        }
    }, 
    {
        sequelize, 
        freezeTableName: true,
        underscored: true, 
        modelName: 'post'
    }
);

module.exports = Post;