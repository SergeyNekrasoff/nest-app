export declare class CreateDocumentDto {
    title: string;
    content?: string;
    userId: number;
}
export declare class CreateDocumentPatchDto {
    id: number;
    updateDocumentDto?: CreateDocumentDto;
}
