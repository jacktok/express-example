import {UserTable} from "../database/userTable";

class SessionControl {
    sessionList: Map<string, UserTable> = new Map<string, UserTable>();

    addUser = (u: UserTable) => {

    }

    getUser = (session: string) => {
        this.sessionList.get(session)
    }
}
