export class CreateTodoDto {
    readonly id: number;
    readonly title: string;
    readonly done: boolean;
    readonly description?: string;
}
