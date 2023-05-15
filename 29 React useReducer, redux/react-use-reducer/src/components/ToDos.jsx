import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useReducer, useState } from "react";


//reducer func
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_DO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TO_DO":
        return {
          todos: [...state.todos.filter((todo)=>todo!==action.payload)],
        };
    default:
      return {
        todos: state.todos,
      };
  }
}
const ToDos = () => {
  const [todo, setTodo] = useState({title:''});
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  function handleAdd() {
    dispatch({ type: "ADD_TO_DO", payload: todo });
    setTodo({title:""});
  }
  function handleDelete(todo){
    if (window.confirm("are you sure to delete?")) {
      dispatch({type:'DELETE_TO_DO',payload:todo});
    }
  }
  function handleChange(e) {
    setTodo({ [e.target.name]: e.target.value });
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          value={todo.title}
          name="title"
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="add to do"
          variant="outlined"
        />
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="warning"
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
      <div
        style={{ width: "20%", margin: "20px auto", border: "1px solid #eee" }}
      >
        <List>
          {state.todos &&
            state.todos.map((todo) => {
              return (
                <ListItem style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'10px auto'}} disablePadding>
                    {todo.title}
                    <Button onClick={()=>handleDelete(todo)} variant="contained" color="error">Delete</Button>
                </ListItem>
              );
            })}
        </List>
      </div>
    </>
  );
};

export default ToDos;
