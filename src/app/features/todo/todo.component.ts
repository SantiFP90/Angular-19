import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  //tasks: Esta variable es un signal que almacena el estado de las tareas. Un signal es una función reactiva que devuelve el valor actual y permite actualizarlo, siendo reactivo a los cambios. Es como un contenedor de estado en Angular, pero más ligero y eficiente
  tasks = signal<Task[]>([]);
  newTaskTitle: string = '';

  //completedCount: Es una variable calculada (computed), que depende de tasks. Se calcula automáticamente y devuelve la cantidad de tareas que están marcadas como completadas. Como podemos ver, esto calcula y actualiza automaticamente, no debemos llamarla al actualizar el estado de las tareas. Ni es necesaria en el OnInit.
  completedCount = computed(
    () => this.tasks().filter((task) => task.completed).length
  );

  //update: Es un método utilizado para cambiar el valor de un signal de manera inmutable. En vez de cambiar directamente el valor de las tareas, el método update crea una nueva lista de tareas con el cambio aplicado. Esto asegura que el estado anterior no se sobrescriba directamente, y la reactividad se mantiene intacta. Es más seguro, ya que no se modifica directamente el estado existente, sino que se crea un nuevo estado a partir del antiguo.

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.update((tasks) => [
        ...tasks,
        {
          id: Date.now(),
          title: this.newTaskTitle.trim(),
          completed: false,
        },
      ]);
      this.newTaskTitle = '';
    }
  }

  toggleTask(id: number) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
}
