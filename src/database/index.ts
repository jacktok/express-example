import {Sequelize} from "sequelize";
import {SetupUserTable} from "./userTable";
import {SetupPostTable} from "./postTable";


export default function setupDatabase(): Sequelize {
    const db = new Sequelize('express_example', 'postgres', 'sqlr00t', {
        host: 'docker',
        port: 5432,
        database: 'express_example',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 1
        }
    });

    // test connect
    db.authenticate()
        .then(() => {
            console.log("connected database")
        }).catch((error: Error) => {
        console.error(`cannot connect to database cause {0}`, error.message)
    });

    SetupUserTable(db);
    SetupPostTable(db);
    return db;
}