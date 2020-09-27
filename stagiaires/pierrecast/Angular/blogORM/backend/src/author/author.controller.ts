import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AuthorEntity } from './entities/author.entity';
import { AuthorService } from './author.service';
import { AddAuthorDto } from './dtos/add-author';
import { UpdateAuthorDto } from './dtos/update-author';

@Controller('author')
export class AuthorController {
 
    constructor(
        private authorService: AuthorService
    ) {

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
       @Param('id', ParseIntPipe) id :number
    ): Promise<AuthorEntity> {
        return await this.authorService.updateAuthor(id, updateAuthorDto);
    }

    @Delete(':id')
    async removeAuthor(
        @Param('id', ParseIntPipe) id :number
    ) {
        return this.authorService.removeAuthor(id);
    }
}
