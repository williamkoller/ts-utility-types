interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Limpar quarto',
  completed: false,
};

/**
 { todo: { title: 'Limpar quarto', completed: false } }
 */
