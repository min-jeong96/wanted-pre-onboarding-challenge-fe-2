var ID_AUTO_INCREASEMENT = 0;

interface TodoProperties {
  content: string,
  completed: boolean,
  category: string,
  tags?: string[]
}

class Todo implements TodoProperties {
  id: number
  content: string
  completed: boolean
  category: string
  tags?: string[] | undefined

  constructor(content: string) {
    this.id = ID_AUTO_INCREASEMENT++;
    this.content = content;
    this.completed = false;
    this.category = 'default';
    this.tags = [];
  }
}

const todos: Todo[] = [];

function createTodo(content: string): Todo {
  const todo = new Todo(content);
  todos.push(todo);
  return todo;
}

function readTodos(id?: number): undefined | Todo | Todo[] {
  if (id) {
    return todos.find(todo => todo.id === id);
  } else {
    return todos;
  }
}

function updateTodo(id: number, data: TodoProperties): Todo {
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    throw Error('해당 id를 가진 todo는 없습니다.');
  }

  for (let key of Object.keys(data)) {
    todo[key] = data[key];
  }
  return todo;
}

function removeAllTodos(): Todo[] {
  let removed = todos.splice(0);
  return removed;
}

function removeTodo(id: number): undefined | Todo {
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex < 0) {
    return undefined;
  } else {
    let removed = todos.splice(todoIndex, 1);
    return removed[0];
  }
}

function removeTodoTag(id: number, tag: string): Todo {
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    throw Error('해당 id를 가진 todo는 없습니다.');
  }

  todo.tags = todo.tags?.filter(t => t !== tag);
  return todo;
}

function removeAllTodoTags(id: number) {
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    throw Error('해당 id를 가진 todo는 없습니다.');
  }

  todo.tags = [];
  return todo;
}
