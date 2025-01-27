# **To-Do List con Angular 19: Uso de Señales**

Este proyecto implementa una lista de tareas en Angular 19 utilizando señales (`signal`). En este README se explican las ventajas de usar señales en lugar de variables normales, cómo se implementan las señales y el código relevante para manejar tareas.

---

## **Ventajas de Usar Señales en Lugar de Variables Normales**

En Angular 19, **señales** proporcionan un mecanismo más eficiente y seguro para gestionar el estado reactivo de la aplicación. A diferencia de las variables normales, las señales permiten una actualización más explícita del estado y garantizan que los cambios sean rastreados y gestionados de forma eficiente por el sistema de detección de cambios de Angular.

### **Principales Ventajas:**

1. **Reactividad Automática**: Las señales son **reactivas** por naturaleza. Cuando se actualiza el valor de una señal, cualquier componente o servicio que dependa de esa señal se actualiza automáticamente, sin necesidad de manualmente subscribirse o gestionar cambios.

2. **Evita Mutaciones Inesperadas**: Las señales están diseñadas para evitar mutaciones directas del estado, lo que asegura que el estado de la aplicación se gestione de manera más predecible. Si quieres modificar el estado, debes hacerlo de una forma explícita a través de métodos como `update` o `mutate`.

3. **Mejora en el Rendimiento**: Angular optimiza las señales para hacer cambios de forma más eficiente. Esto es especialmente útil para objetos grandes o estructuras de datos complejas, ya que el sistema solo se activa cuando realmente se necesita una actualización.

4. **Simplicidad y Claridad**: Las señales permiten un manejo más claro y sencillo del estado. Al usar señales, la lógica de actualización se centraliza y se vuelve más fácil de entender, lo que ayuda a evitar efectos secundarios no deseados.

## Explicación del Código:

## Definición de la señal:

La señal tasks es un arreglo reactivo de tareas. Usamos signal<Task[]>([]) para crear una señal que contendrá un array de objetos Task. Esto garantiza que Angular rastree los cambios en el estado de la lista de tareas.

## Método addTask:

Cuando el usuario agrega una tarea, utilizamos update para agregar una nueva tarea al array de tareas.
Se utiliza Date.now() como identificador único para cada tarea.

## Método toggleTask:

Este método cambia el estado de una tarea (completada/no completada). Usamos update.

## Método deleteTask:

Este método elimina una tarea del array.

## Métodos de signal Usados en el Código

## mutate:

# mutate permite modificar el valor de una señal directamente.

Es útil cuando necesitas hacer cambios en la estructura interna de la señal, como agregar, eliminar o modificar elementos de un array u objeto.

```
    this.tasks.mutate((tasks) => {
    tasks.push(newTask);
    });
```

## Otros Métodos de signal:

- update: Se utiliza para actualizar el valor de una señal, similar a mutate, pero update normalmente es usado cuando quieres reemplazar la señal por un nuevo valor o realizar una operación más explícita.

- set: Establece el valor de la señal, reemplazando completamente su valor actual.

- () => value: Puedes acceder al valor actual de una señal utilizando () sobre la señal.
