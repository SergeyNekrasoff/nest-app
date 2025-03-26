import { Document } from "src/documents/entities/documents.entity";
export declare class User {
    id: number;
    email: string;
    username: string;
    password: string;
    documents: Document[];
}
