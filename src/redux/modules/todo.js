import { isDocument } from "@testing-library/user-event/dist/utils";

const CREATE_TODO = "CREATE_TODO";
const READ_TODOS = "READ_TODOS";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};
// 상세보기 필요
export const readTodos = (payload) => {
  console.log("액션페이로드다", payload);
  return {
    type: READ_TODOS,
    payload,
  };
};
// 완료,취소 버튼과 연결
export const updateTodo = (payload) => {
  // console.log(payload);
  return {
    type: UPDATE_TODO,
    payload,
  };
};
// 삭제버튼과 연결
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const initialState = {
  todoinitialState: [],
};

// 리듀서
const todo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoinitialState: [...state.todoinitialState, action.payload],
      };
    case READ_TODOS:
      console.log("액션페이로드다", action.payload);
      return {
        ...state,
        todo: state.todoinitialState.find((todo) => {
          return todo.id == action.payload;
        }),
        //디테일페이지(상세보기)를 불러오는 기능추가
      };
    case UPDATE_TODO:
      return {
        ...state,
        todoinitialState: state.todoinitialState.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
        // 진행중일때 완료 버튼
      };
    case DELETE_TODO:
      return {
        ...state,
        todoinitialState: state.todoinitialState.filter((todo) => {
          return todo.id !== action.payload;
        }),
        // 완료되거나 진행중일때 취소버튼
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todo;
