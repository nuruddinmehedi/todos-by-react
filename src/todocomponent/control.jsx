import React from 'react'
import {Input} from "reactstrap"

function Control(props){
return(
            <div className="control mt-3">
                <ul className="ul-1-back">
                     <li id="all" onClick={props.conditionalview}>All</li>
                     <li id="running" onClick={props.conditionalview}>Running</li>
                     <li id="completed" onClick={props.conditionalview}>Completed</li>
                </ul>
                <ul className="ul-back">
                     <li><Input onChange={props.viewstatus} value="table" name="view" type="radio" className="mr-1" />Table</li>
                     <li><Input onChange={props.viewstatus} value="list" name="view" type="radio" className="mr-1" />List</li>
                </ul>
                <ul  className="ul-2-back">
                    <li id="selected" onClick={props.cleardata}>Clear Selected</li>
                    <li id="completed" onClick={props.cleardata}>Clear Completed</li>
                    <li id="all" onClick={props.cleardata}>Reset</li>
               </ul>
            </div>
)
}

export default Control