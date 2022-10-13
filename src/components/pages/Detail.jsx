import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readTodos } from "../../redux/modules/todo";

const DetailBox = styled.div`
  border: 1px solid #eee;

  width: 500px;
  height: 350px;

  margin: 150px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box1 = styled.div`
  width: 450px;
  height: 30px;
  margin-top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailBtn = styled.button`
  border: 1px solid transparent;
  border-radius: 10px;
  width: 100px;
  height: 30px;
`;

const Box2 = styled.div`
  width: 450px;
  height: 230px;
  margin: auto;
`;

//ID값 불러오기 필요
//DetailBtn 클릭 시 TodoList로 복귀 필요
//BOX2의 h2 및 내용 불러오기 필요
function Detail() {
  // const ComeBack = () => {
  //   document.location.href("/");
  // };
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.Todo.todo);
  console.log("이건 todo다", todo);
  const navigate = useNavigate();
  const param = useParams();

  const id = param.id;

  useEffect(() => {
    dispatch(readTodos(id));
  }, [dispatch, id]);

  console.log(id);
  return (
    <DetailBox>
      <Box1>
        <p>ID: {id}</p>
        <DetailBtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </DetailBtn>
      </Box1>
      <Box2>
        <h2>{todo?.title}</h2>
        <div>{todo?.body}</div>
      </Box2>
    </DetailBox>
  );
}

export default Detail;
