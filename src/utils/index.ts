import {NextFunction, Router} from "express"
import {Request, Response} from "express"

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
    middleware: Wrapper[],
    router: Router
) => {
    for (const f of middleware) {
        f(router);
    }
};


type Handler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void> | void;

export type Route = {
    path: string,
    method: string,
    handler: Handler | Handler[];
};

export const applyRoutes = (routers: Route[], router: Router, prefix: string = "") => {
    for (const route of routers) {
        const {method, path, handler} = route;
        (router as any)[method](prefix + path, handler)
    }
};