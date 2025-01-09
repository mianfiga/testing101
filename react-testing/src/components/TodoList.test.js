import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("muestra la lista inicial de tareas", () => {
    render(<TodoList />);
    // Verifica que las tareas iniciales están en el documento
    //expect...
  });

  test("agrega una nueva tarea", () => {
    render(<TodoList />);
    
    // Encuentra el campo de texto y el botón
    const input = screen.getByPlaceholderText("New task");
    const addButton = screen.getByText("Add");
    
    // Simula escribir una nueva tarea y presionar el botón
    fireEvent.change(input, { target: { value: "New task" } });
    fireEvent.click(addButton);
    
    // Verifica que la nueva tarea aparece en la lista
    //expect...
    // Verifica que el input se vacía después de agregar
    //expect...
  });

  test("marca una tarea como completada", () => {
    render(<TodoList />);
    
    // Encuentra el checkbox de la primera tarea
    const checkbox = screen.getByLabelText("Learn React");
    
    // Simula hacer clic en el checkbox
    //...
    
    // Verifica que el texto de la tarea aparece tachado
    //... .toHaveStyle("text-decoration: line-through");
  });

  test("no permite agregar tareas vacías", () => {
    render(<TodoList />);
    
    // Encuentra el botón de agregar
    //...
    
    // Simula hacer clic sin escribir nada
    //...
    
    // Verifica que el número de tareas no ha cambiado
    //expect...
  });
});
