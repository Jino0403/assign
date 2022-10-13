import React from "react";
import { useDispatch } from "react-redux";
import todo, { deleteTodo, updateTodo } from "../../redux/modules/todo";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  const dispatch = useDispatch();

  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    //dispatch 할때 넘겨줄 정보는
    // 클릭했을때 id값을 넘겨줘서 그 해당하는 id값을
    // 삭제를 요청한다.
    dispatch(deleteTodo(todoId));
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    // const newTodos = todos.map((todo) => {
    //   if (todo.id === todoId) {
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone,
    //     };
    //   } else {
    //     return { ...todo };
    //   }
    // });

    // setTodos(newTodos);

    dispatch(updateTodo(todoId));
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
                // updateTodo={updateTodo}
                // deleteTodo={deleteTodo}
                // readTodo={readTodo}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
                // updateTodo={updateTodo}
                // deleteTodo={deleteTodo}
                // readTodo={readTodo}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
