import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoItem } from './TodoItems';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';



const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'tomar curso', completed: false },
  { text: 'llorar con la llorona', completed: false },
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter />


      <TodoSearch />


      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>


  );
}

export default App;
