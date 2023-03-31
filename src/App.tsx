import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Button onClick={() => console.log("hello world")} />
    </div>
  );
};

export default App;
