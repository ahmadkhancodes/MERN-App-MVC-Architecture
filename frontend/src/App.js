import "./App.css";
import Header from "./components/header";
import TextInput from "./components/textInput";
// import TextField from "@mui/material/TextField";
import Button from "./components/button";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const saveData = () => {
    setValue(value);
    fetch("http://localhost:32303/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ details: value }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <Header />
      <div class="body-section">
        <h1>Add a Task</h1>
        <TextInput onChange={(e) => setValue(e.target.value)} />
        <Button onClick={() => saveData()} name="Add Task" color="green" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
