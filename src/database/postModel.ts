import {Model} from "sequelize";

export class Post extends Model {
    public id!: number;
    public owner!: number;
    public content_html!: string;
    public readonly modified_time!: Date;
}
