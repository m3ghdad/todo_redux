import { connect } from 'react-redux';
import TodoList from './todo_list';

import {receiveTodos, receiveTodo} from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';


const mapStateProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateProps,
  mapDispatchToProps
)(TodoList);
