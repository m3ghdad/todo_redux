// const allTodos = (state) => {
//   todos = Object.keys(state.todos)
//   todos.map(id => todos[id]);
//   return todos
// }
const allTodos = ({todos}) => Object.keys(todos).map(id => todos[id]);

export default allTodos;
