import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from 'src/interfaces/todo.interface.ts';
import { CreateTodoDto } from 'src/dto/create-todo.dto.ts';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: 'todos app',
            description: 'Create NestJS todos app',
            done: false,
        },
        {
            id: 2,
            title: 'bread',
            description: 'buy bread',
            done: true,
        },
        {
            id: 3,
            title: 'wine',
            description: 'buy wine',
            done: true,
        },
    ];
    findOne(id:string): Todo {
        return this.todos.find(todo => todo.id === Number(id));
    }
    findAll(): Todo[]{
        return this.todos;
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo];
    }

    update(id: string, todo: Todo) {
        //retrieve
        const todoToUpdate = this.todos.find(todo => todo.id === Number(id));
        if (!todoToUpdate) {
            return new NotFoundException('did not find todo');
        }
        //apply modif (granular update single property and not full object)
        if (todo.hasOwnProperty('done')) {
            todoToUpdate.done = todo.done;
        }
        if (todo.title) {
            todoToUpdate.title = todo.title;
        }
        if (todo.description) {
            todoToUpdate.description = todo.description;
        }

        const updatedTodos = this.todos.map(todo => todo.id != +id ? todo : todoToUpdate);
        this.todos = [...updatedTodos];
        return { updatedTodo: 1, todo: todoToUpdate };
    }

    delete(id: string) {
        const nbOfTodosBeforeDelete = this.todos.length;
        this.todos = [...this.todos.filter(todo => todo.id !== +id)];
        if (this.todos.length < nbOfTodosBeforeDelete) {
            return { deletedTodos: 1, nbTodos: this.todos.length };
        } else {
            return { deletedTodos: 0, nbTodos: this.todos.length };
        }
    }
}
