import { IsNotEmpty, IsString } from "class-validator";

export class AddRoleDto {
    @IsNotEmpty()
    @IsString()
    role: string;
    
}