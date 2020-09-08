import { Controller, Get, Post, Body, Param, Patch, Delete,  } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from 'src/interfaces/todo.interface.ts';
import { CreateTodoDto } from 'src/dto/create-todo.dto.ts';

// a l'ecoute de localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }
    
    @Get()
    findAll(): Todo[]{
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo: CreateTodoDto) {
        console.log('new todo', newTodo);
        this.todosService.create(newTodo);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log('id', id);
        return this.todosService.findOne(id);
    }
    
    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
        return this.todosService.update(id, todo);
    }
    
    @Delete(":id")
    deleteTodo(@Param('id') id: string) {
        return this.todosService.delete(id);
    }
}
