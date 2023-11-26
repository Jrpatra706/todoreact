import './css/TodoItems.css'
import tick from './assets/tick.png';
import not_tick from './assets/not_tick.png';
import cross from './assets/cross.png';

const TodoItems = ({settodoList, text,display,no}) => {

  const tickHandler=(no)=>{

    let data = JSON.parse(localStorage.getItem('todos'));

    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===''){
          data[i].display='ticked';
        }
        else{
          data[i].display='';
        }
        break;
      }
    }
    settodoList(data);
  }

  const crossHandler=(no)=>{
    let data = JSON.parse(localStorage.getItem('todos'));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        data.splice(i,i+1);
        break;
      }
    }
    settodoList(data);
  }

  return (
    <div className='todoItems'>
      <div className="todo-items-container" onClick={()=>{tickHandler(no);}}>
        {display===''?<img  className='tick-img' src={not_tick}/>:<img className='tick-img' src={tick}/>}
        <div className={`todo-text ${display}`}>{text}</div>
      </div>
      <img className='cross-img' onClick={()=>{crossHandler(no);}} src={cross} alt="" />
    </div>
  )
}

export default TodoItems;