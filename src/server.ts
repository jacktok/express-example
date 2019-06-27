import http from "http";
import express from "express"
import {applyMiddleware, applyRoutes} from "./utils";
import middleware from './middleware'
import routers from "./services"
import errorHandlers from "./middleware/errorHandlers";


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
applyRoutes(routers, router);
applyMiddleware(errorHandlers, router);

const {PORT = 3000} = process.env;
const server = http.createServer(router);


server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});