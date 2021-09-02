import React from 'react'
import {Input} from 'reactstrap'
import Modalbutton from './modal'

function Header(props){

return (
    <div className="header">
    <h3 className="mb-5 text-center">Every Day workfollow</h3>
    <Input id="search" onChange={props.search} className="mr-1 d-inline-block" type="text" name="search"/>
    <Modalbutton addtask={props.addtask} buttonLabel="Add New"/>
    </div>
)
}

export default Header