import {Sequelize, Model, DataTypes} from "sequelize";

export class User extends Model {
    public readonly id!: number;
    public email!: string;
    public name!: string;
    public password!: string;
    public readonly user_role!: string;
    public readonly modified_time!: Date;
}

export const SetupUser = (db: Sequelize) => {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_role: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        modified_time: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        schema: 'app_example',
        tableName: 'user_data',
        sequelize: db,
        createdAt: false,
        updatedAt: false
    });
}
