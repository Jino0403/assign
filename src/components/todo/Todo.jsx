import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

// 1. 상세보기 버튼을 만들어야함.
// 2. title의 상단에 위치해야하며, title은 눌렀을때 관련 정보가 나와야하고
//  ID값이 부여됨.
//

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  console.log({ todo });

  const navigate = useNavigate();

  // const onClickP = () => {
  //   document.location.href("Detail");
  // };

  return (
    <div className="todo-container">
      <div>
        <p
          onClick={() => {
            navigate(`/Detail/${todo.id}`);
          }}
        >
          상세보기
        </p>
      </div>
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHanlder(todo.id)}
          // onClick={() => {deleteTodo(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
          // onClick={() => {updateTodo(todo.id)}}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
