import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo, setIsCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onIsCompletedPressed }) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onIsCompletedPressed={onIsCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onIsCompletedPressed: (text) => dispatch(setIsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
