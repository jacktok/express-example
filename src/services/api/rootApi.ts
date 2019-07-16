import {Route} from "../../utils";


const rootApi: Route[] = [
    {
        path: '/',
        method: 'get',
        handler: (req, res) => {
            res.send('hello')
        }
    }
];


export default rootApi;