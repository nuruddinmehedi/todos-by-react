import React from "react"
import {Button} from "reactstrap"
function Table(props){
let todolist
if(props.taskitem){
 todolist =props.taskitem.map((data)=>{
        return(
            <tr>
            <td><input checked={data.checkboxstatus} onChange={props.updatecheckbox} id={data.id} type="checkbox"/></td>
            <td>{data.time}</td>
            <td>{data.title}</td>
            <td><Button value={data.status} onClick={props.ststusUpdate} id={data.id} color="success">{data.status}</Button></td>
            </tr>
        )
    })
}
return(
    <table>
            <tr>
            <th>#</th>
            <th>Time</th>
            <th>Todo</th>
            <th>Action</th>
            </tr>
            {todolist}
    </table>
)
}

export default Table