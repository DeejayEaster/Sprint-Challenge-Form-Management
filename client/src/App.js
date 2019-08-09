import React from "react";
import "./App.css";
import FormikApp from "./components/UserForm";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="App">
      <FormikApp />
      <UserData />
    </div>
  );
}

export default App;
