import http from "http";
import express, {Router} from "express"
import {applyMiddleware, applyRoutes} from "./utils";
import middleware from './middleware'
import errorHandlers from "./middleware/errorHandlers";
import setupDatabase from "./database";
import rootApi from "./services/api/rootApi";
import userApi from "./services/api/user";

console.log("setup database");
setupDatabase();

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});


const router = express();
applyMiddleware(middleware, router);
// applyRoutes(routers, userApi);

applyRoutes(rootApi, router);
applyRoutes(userApi, router, '/user');
applyMiddleware(errorHandlers, router);

const {PORT = 3000} = process.env;
const server = http.createServer(router);


server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});
