import React, { useState } from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import List from "../list/List";
import Detail from "./Detail";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.Todo.todoinitialState);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "나만의 TodoList 만들기",
  //     body: "어렵네요.. 하지만 만들어봅시다",
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: "나만의 TodoList 만들기",
  //     body: "어렵지만 해냈네요!",
  //     isDone: true,
  //   },
  // ]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} />
      <List todos={todos} />
    </Layout>
  );
};

export default TodoList;
