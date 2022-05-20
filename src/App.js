import React , {useState} from 'react';
import Form from './Components/Form';
import './App.css';
import Todolist from './Components/Todolist';
function App() {
  const [inputText , setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  
  return (
    
    <div className="App">
      <header>
          <h1>Todo List </h1>
          <br></br>
          
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <Todolist todos={todos}  disp={inputText} />
    </div>
  );
}

export default App;
