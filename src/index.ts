interface TodoProperties {
  content: string,
  completed: boolean,
  category: string,
  tags?: string[]
}
interface Todo extends TodoProperties {
  id: number
}

function createTodo(content: string): Todo {}

function readTodos(id?: number): Todo | Todo[] {}

function updateTodo(id: number, data: TodoProperties) {}

function removeAllTodos() {}
function removeTodo(id: number) {}
function removeTodoTag(id: number, tag: string) {}
function removeAllTodoTags(id: number) {}
