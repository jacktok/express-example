import {User} from "../database/userModel";

class SessionControl {
    sessionList: Map<string, User> = new Map<string, User>();

    addUser = (u: User) => {

    }

    getUser = (session: string) => {
        this.sessionList.get(session)
    }
}
