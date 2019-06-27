import {Router, Request, Response, NextFunction} from "express";
import * as ErrorHandler from "../utils/errorHandler"

const handle400Error = (router: Router) => {
    router.use((req, res) => {
        ErrorHandler.notFoundError()
    })
}

const handleClientError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.clientError(err, res, next)
    })
};

const handlerServerError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.serverError(err, res, next)
    });
};


export default [handle400Error, handleClientError, handlerServerError]