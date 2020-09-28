import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddAuthorDto } from './dtos/add-author';
import { UpdateAuthorDto } from './dtos/update-author';
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

    async getAuthorById(id: number): Promise<AuthorEntity> {
        return await this.authorRepository.findOne(id);
    }

    async addAuthor(author: AddAuthorDto): Promise<AuthorEntity> {
        return await this.authorRepository.save(author);
    }

    async updateAuthor(id: number, author: UpdateAuthorDto): Promise<AuthorEntity> {
        const newAuthor = await this.authorRepository.preload({
            id,
            ...author
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
