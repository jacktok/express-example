import {Sequelize, Model, DataTypes} from "sequelize";

export class UserTable extends Model {
    public readonly id!: number;
    public email!: string;
    public name!: string;
    public password!: string;
    public readonly user_role!: string;
    public readonly modified_time!: Date;

    toString(): string {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
            password: this.password,
            user_role: this.user_role,
            modified_time: this.modified_time
        }.toString()
    }
}

export function SetupUserTable(db: Sequelize) {
    UserTable.init({
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
            type: DataTypes.ENUM('admin', 'common'),
            allowNull: false
        },
        modified_time: {
            type: DataTypes.DATE,
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
