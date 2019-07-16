import {Sequelize, Model, DataType, DataTypes} from "sequelize";

export class PostTable extends Model {
    public id!: number;
    public owner!: number;
    public content_html!: string;
    public readonly modified_time!: Date;

    toString(): String {
        return {
            id: this.id,
            owner: this.owner,
            content_html: this.content_html,
            modified_time: this.modified_time
        }.toString()
    }
}


export function SetupPostTable(db: Sequelize) {
    PostTable.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            owner: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            content_html: {
                type: DataTypes.STRING,
                allowNull: false
            },
            modified_time: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            schema: 'app_example',
            tableName: 'post',
            sequelize: db,
            createdAt: false,
            updatedAt: false
        }
    )
}