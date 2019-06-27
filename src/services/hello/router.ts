import {Request, Response} from "express"
import {Route} from "../../utils";

const routing: Route[] = [
    {
        path: "/",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello word")
        }
    }
];

export default routing;