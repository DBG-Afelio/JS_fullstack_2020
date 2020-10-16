import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthorEntity } from './entities/author.entity';
import { AuthorService } from './author.service';
import { AddAuthorDto } from './dtos/add-author.dto';
import { UpdateAuthorDto } from './dtos/update-author.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Roles } from 'src/decorators/roles.decorators';
import { User } from 'src/decorators/user.decorators';
import { RolesGuard } from 'src/guards/role.guards';

@Controller('author')
export class AuthorController {
 
    constructor(
        private authorService: AuthorService
    ) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('AUTHOR')
    @Get('mon-profil')
    async getMyAuthorProfile(
        @User() user: any
       
    ): Promise<AuthorEntity[]> {
        
        return await this.authorService.getMyAuthorProfile(user.id);
    }

    @Get('user/:id')
    async getAuthorByUserId(
        @Param('id', ParseIntPipe) id: number
    ): Promise<AuthorEntity> {
        return await this.authorService.getAuthorByUserId(id);
    }

    @Get(':id')
    async getAuthorById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<AuthorEntity> {
        return await this.authorService.getAuthorById(id);
    }

    @Get()
    async getAllAuthors(): Promise<AuthorEntity[]> {
        return await this.authorService.getAllAuthors();
    }

    @Post()
    async addAuthor(
       @Body() addAuthorDto: AddAuthorDto
    ): Promise<AuthorEntity> {
        return await this.authorService.addAuthor(addAuthorDto);
    }

    @Patch(':id')
    async updateAuthor(
       @Body() updateAuthorDto: UpdateAuthorDto,
       @Param('id', ParseIntPipe) id: number
    ): Promise<AuthorEntity> {
        return await this.authorService.updateAuthor(id, updateAuthorDto);
    }

    @Delete(':id')
    async removeAuthor(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.authorService.removeAuthor(id);
    }
}
