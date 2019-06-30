import http from "http";
import express from "express"
import {applyMiddleware, applyRoutes} from "./utils";
import middleware from './middleware'
import routers from "./services"
import errorHandlers from "./middleware/errorHandlers";
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';


// const Sequelize = require("sequelize");

const db = new Sequelize('express_example', 'postgres', 'sqlr00t', {
    host: 'docker',
    database: 'express_example',
        dialect: 'postgres',
    pool: {
        max: 5,
        min: 1
    }
});


class User extends Model {
    public readonly id!: number;
    public email!: string;
    public name!: string;
    public password!: string;
    public readonly user_role!: string;
    public readonly modified_time!: Date;


    public readonly  post?: Post[] ;
    public static associations: {
        posts: Association<User, Post>;
    }
}

class Post extends Model {
    public id!:number;
    public owner!: number;
    public content_html!: string;

    public readonly modified_time!: Date;

}
db.authenticate()
    .then(() => {
        console.log("connected database")
    }).catch((error: Error) => {
    console.error("cannot connect to database cause {0}", error.message)
});


User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_role:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    modified_time: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    schema: 'app_example',
    tableName: 'user_data',
    sequelize: db,
    createdAt: false,
    updatedAt: false
});
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});


async function load() {
    const test = await User.findAll();
    test.forEach(user => {
        console.log(user)
    })
}

load();

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routers, router);
applyMiddleware(errorHandlers, router);

const {PORT = 3000} = process.env;
const server = http.createServer(router);


server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});
