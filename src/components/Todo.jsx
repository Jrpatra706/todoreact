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
    </div>
  )
}

export default Todo;