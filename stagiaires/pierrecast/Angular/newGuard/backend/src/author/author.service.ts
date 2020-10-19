import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { Repository } from 'typeorm';
import { AddAuthorDto } from './dtos/add-author.dto';
import { UpdateAuthorDto } from './dtos/update-author.dto';
import { AuthorEntity } from './entities/author.entity';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(AuthorEntity)
        private authorRepository : Repository<AuthorEntity>
    ) { }

    async getAllAuthors(): Promise<AuthorEntity[]> {
        return await this.authorRepository.find();
    }

    async getMyAuthorProfile(id: number): Promise<AuthorEntity> {
        let query=  await this.authorRepository.findOne({
             user: {id}
        });
        return query;
    }
    
    async getAuthorByUserId(id: number): Promise<AuthorEntity> {
        return await this.authorRepository.findOne({
            where: { "userId" : id}
        });
    }

    async getAuthorById(id: number): Promise<AuthorEntity> {
        return await this.authorRepository.findOne(id);
    }

    async addAuthor(author: AddAuthorDto): Promise<AuthorEntity> {
        const newAuthor = await this.authorRepository.preload({
            
            ...author,
            user : { id: author.userId }
        });
      
        return await this.authorRepository.save(author);
    }

    async updateAuthor(id: number, author: UpdateAuthorDto): Promise<AuthorEntity> {
        
        const newAuthor = await this.authorRepository.preload({
            id,
            ...author,
            user : { id: author.userId }
        });
      
        if (!newAuthor) {
            throw new NotFoundException(`Auteur ${id} inexistant`);
        }
        return await this.authorRepository.save(newAuthor);
    }

    async removeAuthor(id:number) {
        const authorToRemove = await this.authorRepository.findOne(id);
        if (!authorToRemove) {
            throw new NotFoundException(`Auteur ${id} inexistant`);
        }
        this.authorRepository.remove(authorToRemove);
    }
}
