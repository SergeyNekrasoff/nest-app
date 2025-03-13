export declare class CreateDocumentDto {
    title: string;
    content?: string;
}
export declare class CreateDocumentPatchDto {
    id: number;
    updateDocumentDto?: CreateDocumentDto;
}
