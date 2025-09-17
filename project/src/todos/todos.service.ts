
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todos } from './todos.interface';

@Injectable()
export class TodosService {
  private todos: Todos[] = [];

  findAll(): Todos[] {
    return this.todos;
  }

  findById(id: number): Todos {
    const todo = this.todos.find(todo => todo.id === id);
  if (!todo) {
    throw new NotFoundException(`Todo with ID ${id} not found`);
  }
  return todo;
}

  create(id: number, title: string, status: 'pending' | 'done'): Todos {
    const newTodo: Todos = {
      id,
      title,
      status
    };
    this.todos.push(newTodo);
    return newTodo;
  }

    update(id: number, title: string, status: 'pending' | 'done'): Todos {
    const todos = this.findById(id);
    todos.title = title
    todos.status = status
    return todos;
  }

  delete(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
    return true
  }
}
