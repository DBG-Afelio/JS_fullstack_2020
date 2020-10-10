export interface SetArticleDto {
    title: string;
    content: string;
    date: Date;
    published: boolean;
    complete: boolean;
    authorId: number;
}
