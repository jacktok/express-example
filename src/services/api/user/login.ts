import {Handler} from "express";
import {UserTable} from "../../../database/userTable";
import * as jwt from "jsonwebtoken";
import {privateKey} from "../../shared";
import TokenData from "../../../model/tokenData";

const login: Handler = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email == null || password == null) {
        res.status(400).send("bad request")
    } else {
        const user = await UserTable.findOne({
            where: {
                email: email,
                password: password
            }
        });
        if (user == null) {
            res.status(400).send('login failure')
        } else {
            const token = jwt.sign(new TokenData(user.id, user.name, user.email, user.user_role), privateKey);
            res.send(token);
        }
    }
};


export default login;