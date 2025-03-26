import { User } from "src/users/entities/user.entity";
export declare class Document {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    creator: User;
}
