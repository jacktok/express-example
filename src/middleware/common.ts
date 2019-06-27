import {Router} from "express";
import cors from "cors"
import paser from "body-parser"
import compression from "compression"


export const handleCors = (router: Router) => router.use(cors({credentials: true, origin: true}));

export const handleBodyRequestPassing = (router: Router) => {
    router.use(paser.urlencoded({extended: true}));
    router.use(paser.json());
};

export const handleCompression = (router: Router) => {
    router.use(compression())
};