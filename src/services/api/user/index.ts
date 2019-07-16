import {Route} from "../../../utils";
import {UserTable} from "../../../database/userTable";
import * as jwt from 'jsonwebtoken';
import login from "./login";
import {privateKey} from "../../shared";
import * as _ from 'lodash'
import TokenData from "../../../model/tokenData";


const userApi: Route[] = [
    {
        path: '/',
        method: 'get',
        handler: async (req, res) => {
            const header = req.header('token');

            if (header == null) {
                res.status(400).send("bad request")
            } else {
                try {
                    const obj: any = jwt.verify(header, privateKey).valueOf();
                    if (obj.role == 'admin') {
                        const userList = await UserTable.findAll();
                        res.send(_.map(userList, user => user.name))
                    } else {
                        res.status(400).send('bad request')
                    }
                } catch (e) {
                    res.status(400).send("bad request")
                }
            }
        }
    },
    {
        path: '/login',
        method: 'post',
        handler: login
    }
];

export default userApi;