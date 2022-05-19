import React from 'react';

const Todolist = (props) =>{
    console.log(props)
    return(
        
        <div className="todo-container">
            
                {props.disp }
            
        </div>
    );
}
export default Todolist;