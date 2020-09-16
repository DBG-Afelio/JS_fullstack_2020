import { Controller, Get, Param, Post, Body, ParseIntPipe, HttpStatus, ValidationPipe, UsePipes, Patch, Put, Delete, Query, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/user.model';
import { User_Dto } from 'src/dtos/User_Dto';
import { CreateUser_Dto } from 'src/dtos/CreateUser_Dto';
import { UpdateUser_Dto } from 'src/dtos/UpdateUser_Dto';
import { json } from 'express';
import { GetUserFiltersDto } from 'src/dtos/GetUserFiltersDto';
import { StagiairesService } from '../stagiaires/stagiaires.service';
import { StagiaireEntity } from '../stagiaires/entities/stagiaire.entity';
import { AddStagiaireDto } from '../stagiaires/dto/addStagiaireDto';
import { error } from 'console';
import { UpdateStagiaireDto } from '../stagiaires/dto/updateStagiaireDto';


@Controller('users') // a l'ecoute du localhost:3xxx/users
export class UsersController {
    constructor(
      // private readonly usersService: UsersService, 
      // was used with 1rst option (no orm)

      private readonly stagiairesService: StagiairesService, 
      // 2nd option (orm - @InjectRepository)
      ) { }
    
//******* 2nd option- with InjectRepository in Service ****/ 
//********1rst method  */
    @Get()
    @UsePipes(ValidationPipe)
    public getUserList(
        // @Query() myFilters: GetUserFiltersDto
        ): Promise<StagiaireEntity[]> {
           // need to add getFiltered() here for filtered searches
          return this.stagiairesService.getAll();
        }
    
    @Get(':id')
    public getUserById(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_FOUND})) id:number): Promise<StagiaireEntity> {
        return this.stagiairesService.getOne(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    public createUser(@Body() newUser: AddStagiaireDto): Promise<StagiaireEntity> {
        return this.stagiairesService.addOne(newUser);
    }

    @Patch(':id')
    @UsePipes(ValidationPipe)
    public updateUser(
      @Param('id', new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_FOUND})) id:number,
      @Body() userToUpdate: UpdateStagiaireDto): Promise<StagiaireEntity> {
        return this.stagiairesService.updateOne(id, userToUpdate);
    }

  }

    // -------------------- with 1rst method
    // @Get()
    // @UsePipes(ValidationPipe)
    // getUserList(
    //     @Query() myFilters: GetUserFiltersDto
    // ): Promise<User_Dto[]> {
    //     console.log('my filters : ', myFilters);
    //     console.log('nombre de filtres : ', Object.keys(myFilters).length);

    //     if(Object.keys(myFilters).length){
    //         return this.usersService.getFiltered(myFilters)
    //             .then((userList: User[]) => userList.map((user: User) => user.toDto()))
    //             .catch(error => {
    //                 throw new Error(error)
    //             });
    //     } else {
    //         return this.usersService.getAll()
    //         .then((userList: User[]) => userList.map((user: User) => user.toDto()))
    //         .catch(error => {
    //             throw new Error(error)
    //         });
    //     }
    // }

    /*--------- 

        @Get(':id')
    getUserById(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode : HttpStatus.NOT_FOUND})) id:number): Promise<User_Dto> {
        return this.usersService.getById(id)
            .then((user: User) => user.toDto())
            .catch(error => {
                throw new Error(error);
            });
    }

    /*--------- 
    // @Post()
    // @UsePipes(ValidationPipe)
    // createUser(@Body() newUser: CreateUser_Dto): Promise<User_Dto> {
    //     return this.usersService.create(newUser)
    //         .then((user: User) => user.toDto())
    //         .catch(error => {
    //             throw new Error(error);
    //         });
    // }

    /*--------- 
    // @Put(':id')
    // @UsePipes(ValidationPipe)
    // updateUser(@Body() userToUpdate: UpdateUser_Dto): Promise<User_Dto> {
    //     return this.usersService.update(userToUpdate)
    //         .then((user: User) => user.toDto())
    //         .catch(error => {
    //             throw new Error(error);
    //         });
    // }

   /*--------- 
    // @Delete(':id')
    // deleteUser(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id): void {
    //     this.usersService.delete(id)
    //         .then()
    //         .catch(error => {
    //             throw new Error(error);
    //         });
    // }

*/