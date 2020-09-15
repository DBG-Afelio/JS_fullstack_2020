import { User } from "../models/user.model";
import { Role } from "src/roles/models/role.model";
import { UserDto } from "./userDto";

export interface UserCompleteDto {
     readonly user: UserDto;
     readonly nationality: string;
     readonly roles?: Role[];
}