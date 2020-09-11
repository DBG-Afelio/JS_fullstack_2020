import { IsString, IsOptional, IsIn, IsNumber, IsInt } from "class-validator";

export class GetUserFiltersDto {
    
    @IsOptional()
    @IsInt()
    @IsIn(['1', '2', '3'])
    // @IsIn(['Italie', 'France', 'Belgique'])
    public nationId: number;

    @IsOptional()
    @IsString()
    @IsIn(['M', 'F', 'O'])
    public gender: string;
   // public jobs: string;

}
