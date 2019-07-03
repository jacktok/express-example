import http from "http";
import express from "express"
import {applyMiddleware, applyRoutes} from "./utils";
import middleware from './middleware'
import routers from "./services"
import errorHandlers from "./middleware/errorHandlers";

import dotenv from "dotenv"
import {Sequelize, Model, DataTypes, BuildOptions} from 'sequelize';
import {
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin
} from 'sequelize';
import {SetupUser, User} from "./database/userModel";

dotenv.load();

// const Sequelize = require("sequelize");

const db = new Sequelize('express_example', 'postgres', 'sqlr00t', {
    host: 'docker.host',
    database: 'express_example',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 1
    }
});

db.authenticate()
    .then(() => {
        console.log("connected database")
    }).catch((error: Error) => {
    console.error("cannot connect to database cause {0}", error.message)
});

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});


SetupUser(db);
const x = async () => {
    (await User.findAll()).forEach(u => console.log(u.name))
}
x();


const router = express();
applyMiddleware(middleware, router);
applyRoutes(routers, router);
applyMiddleware(errorHandlers, router);

const {PORT = 3000} = process.env;
const server = http.createServer(router);


server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});
