export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const recieveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const recieveTodo = (todo) => {
  return {
    type: RECIEVE_TODO,
    todo: todo
  };
};
