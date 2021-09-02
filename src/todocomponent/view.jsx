import React from 'react'
import Itemdev from './itemdev'
import Table from './table'
function View(props){
    let taskitem
if(props.tasklist){
   taskitem= props.tasklist.map((item)=>{
        return <Itemdev updatecheckbox={props.updatecheckbox} updatecheckboxvalue={item.checkboxstatus} title={item.title} status={item.status} time={item.time} id={item.id} ststusUpdate={props.ststusUpdate} />
     })
}
if(props.view){
    return(
     <React.Fragment>
       {taskitem}
     </React.Fragment>
    )
}else{
    return(
        <Table taskitem={props.tasklist} updatecheckbox={props.updatecheckbox} ststusUpdate={props.ststusUpdate}/>
    )
}
}
export default View