import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import type { Todos } from './todos.interface';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todos[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Todos {
    return this.todosService.findById(id);
  }

  @Post()
  create(@Body('id') id: number,@Body('title') title: string, @Body('status') status: 'pending' | 'done') {
    return this.todosService.create(id, title, status);
  }

  @Put(':id')
  update
  (@Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
    @Body('status') status: 'pending' | 'done',
  ): Todos {
    return this.todosService.update(id, title, status);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.todosService.delete(id)
  }
}
