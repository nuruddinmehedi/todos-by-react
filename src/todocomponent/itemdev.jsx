import React from 'react'
import {Input,Button,ListGroupItem} from 'reactstrap'
function Itemdev(props){
    console.log(props.updatecheckboxvalue)
return(
    <ListGroupItem>
    <div className="item-div">
    <Input checked={props.updatecheckboxvalue} onChange={props.updatecheckbox} id={props.id} type="checkbox" className="mt-3" />
    <div className="taskdes">
    <h4>{props.title}</h4>
    <p>{props.time}</p>
    </div>
   <div>
   <Button value={props.status} onClick={props.ststusUpdate} id={props.id} className="mt-2" color="success">{props.status}</Button>
   </div>
    </div>
    </ListGroupItem>
   
)
}

export default Itemdev