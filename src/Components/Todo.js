import React ,{useState}from "react"
import List from './List';

function Todo() {
    const [task,setTask] = useState("")
    const [todos,setTodos] =useState([])
    const changeHandler = (e) =>{
        setTask(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(task)
        const newTodos = [...todos,task]
        setTodos(newTodos)
        setTask("");
    }
    const deleteHandler =(indexVal) =>{
        const newTodos = todos.filter((todo,index)=>index!=indexVal)
        setTodos(newTodos)
    }
  return (<div data-testid="TodoList">
      <center>
          <div className="card">
              <div className="card-body">
                  <h5 className="card-title">ToDo Application</h5>
                  <form onSubmit={submitHandler}>
                      <input type="text" name="task" value={task} data-testid="input" onChange={changeHandler}></input> &nbsp;
                      <input type="submit" value="add" name="add" className="createButton" data-testid="createButton"></input>
                  </form>
                    <div className="todo" data-testid="todo">
                            {todos.map((todo,index) => 
                                 <div key={index}>
                                   <h5>{todo}<button className="deleteButton"  data-testid="deleteButton" onClick={()=>deleteHandler(index)}value="Delete"></button></h5>
                                     </div>
                             )}

      
                    </div>
              </div>
          </div>
      </center>
  </div>)
}

export default Todo
