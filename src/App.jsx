import React from "react";


const App = () => {
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px",
  };

  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];

  return (
    <div style={style}>
      {vegetables.map((vegetableName) => {
        return (
          <div style={squareStyle} key={vegetableName}>
            {vegetableName}
          </div>
        );
      })}
    </div>
  );
};

export default App;