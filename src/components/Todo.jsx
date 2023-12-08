import TodoItems from './TodoItems.jsx';
import { useState } from 'react';
import './css/Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';

let count =0;
const Todo = () => {
  const [todoList, settodoList] = useState([]);
  const inputRef = useRef(null);

  useEffect(()=>{
    settodoList(JSON.parse(localStorage.getItem('todos')));
    count = localStorage.getItem('todoNos');
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      localStorage.setItem('todos',JSON.stringify(todoList));
    },100);
  },[todoList]);

  
  const addTodo = ()=>{
    count++;
    settodoList([...todoList,{no:count,text:inputRef.current.value,display:''}]);
    inputRef.current.value = '';
    localStorage.setItem('todoNos',count);
  }

  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="input-field">
            <input ref={inputRef} className='input-task' placeholder='Add your task' type="text" />
            <button className='add-btn' onClick={()=>{addTodo()}} >
              Add
            </button>
        </div>
        <div className="todo-list">
          {todoList.map((todo,index)=>{
            return <TodoItems key={index} settodoList={settodoList}  text={todo.text} display={todo.display} no={todo.no}/>;
          })}
        </div>
        <img src="data:image/png;base64,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" alt="" />
    </div>
  )
}

export default Todo;