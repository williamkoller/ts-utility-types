interface TodoList {
  title: string;
  description: string;
}

function updateTodo(todo: TodoList, fieldsForUpdate: Partial<TodoList>) {
  return { ...todo, fieldsForUpdate };
}

const todoOne = {
  title: 'organizar a mesa',
  description: 'limpar bagunca',
};

const todoTwo = updateTodo(todoOne, {
  description: 'tirar o lixo',
});

/**
{
  todoOne: { title: 'organizar a mesa', description: 'limpar bagunca' },
  todoTwo: {
    title: 'organizar a mesa',
    description: 'limpar bagunca',
    fieldsForUpdate: { description: 'tirar o lixo' }
  }
}
 */
