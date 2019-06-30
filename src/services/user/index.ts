import {Route} from "../../utils";

const router: Route[] = [
    {
        path: '/user',
        method: 'get',
        handler: (req, res) => {
            res.send({message: 'user'})
        }
    }
];

export default router;