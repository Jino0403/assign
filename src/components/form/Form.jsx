// input 정볼르 입력하는 섹션을 입력할 창

import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../../redux/modules/todo";

let number = 3;
function Form({ setTodos, todos }) {
  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  console.log(todos);

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    dispatch(createTodo({ ...todo, id: number }));

    // setTodos([...todos, { ...todo, id: number }]); // 대체하는 애가 리덕스
    // 값을 정제해
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
