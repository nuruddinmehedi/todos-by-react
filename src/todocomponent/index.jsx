import React, { Component, Fragment } from 'react';
import Header from './header';
import Control from './control';
import View from './view';
class Main extends Component {
    state={
        view:false,
        tsak:[],
        conditionaldata:[],
        isall:true,
        iscompleted:false,
        isrunning:false,
        isconditonal:false
    }
// view controler

  view = (e)=>{
       if(e.target.value==="table"){
           this.setState({
               view:false
           })
       }else{
        this.setState({
            view:true
        })
       }
  }
conditionaldataloop=(matchtext,data)=>{
  let returndata=[]
  for (const key in data) {
    if(data[key].status===matchtext){
        returndata.push(data[key]);
    }
  }
  return returndata;

}
viewresul= ()=>{
  if(this.state.isconditonal){
    console.log("vr")
    if(this.state.isall){
     return this.state.conditionaldata
    }else if(this.state.isrunning){
     return this.conditionaldataloop("Running",this.state.conditionaldata)

    }else if(this.state.iscompleted){
     return this.conditionaldataloop("Completed",this.state.conditionaldata)
    }
  }else{
    console.log("cr")
    if(this.state.isall){
      return this.state.tsak
     }else if(this.state.isrunning){
      return this.conditionaldataloop("Running",this.state.tsak)
     }else if(this.state.iscompleted){
      return this.conditionaldataloop("Completed",this.state.tsak)
     }
  }
}
// add new task 
 addtesk = (event)=>{
    const date= new Date()
    event.preventDefault()


 this.setState({
    tsak:[...this.state.tsak,{
        id: date.getMilliseconds() + Math.random(),
        title:event.target.title.value,
        description:event.target.description.value,
        time: date.toDateString(),
        status:"Running",
        checkboxstatus:false,
 }]
})


   event.target.reset()
 }
 //status update
 ststusUpdate=(event)=>{
    let newstate
     for (const task in this.state.tsak) {
      
        if(this.state.tsak[task].id===parseFloat(event.target.id)){
            newstate= this.state.tsak
          if(event.target.value==="Completed"){
            newstate[task].status="Running"
          }else if(event.target.value==="Running"){
            newstate[task].status="Completed"
          }
            this.setState({
               tsak:newstate
            })  
        } 
     }
 }
 // search result show 
 setconditionalsearch= (event)=>{
  if(event.target.value){
    let updatestate=[]
    const searchreg= new RegExp(event.target.value,'gi')
  for (const key in this.state.tsak) {
     if(this.state.tsak[key].title.search(searchreg)>-1){
         updatestate.push(this.state.tsak[key])
     }
  }
  this.setState({
     conditionaldata:updatestate,
     isconditonal:true
  })
  console.log(this.state.conditionaldata)
}else{
  this.setState({
    conditionaldata:[],
    isconditonal:false
 })
}
 }
 updateisall=(event)=>{
     this.setState({
       isall:true,
       iscompleted:false,
       isrunning:false
     })
 }
 updateisrunning=(event)=>{
  this.setState({
    isall:false,
    iscompleted:false,
    isrunning:true
  })
}
updateiscompleted=(event)=>{
  this.setState({
    isall:false,
    iscompleted:true,
    isrunning:false
  })
}
 searchresult= (event)=>{
   if(event.target.id==="search"){
    this.setconditionalsearch(event)
   }else if(event.target.id==="all"){
    this.updateisall(event)
   }else if(event.target.id==="running"){
    this.updateisrunning(event)
   }else if(event.target.id==="completed"){
    this.updateiscompleted(event)
   }
 }
 // clear functionality
 checkupdateloop=(event,data)=>{
  let upadtestate=[]
  for (const key in data) {
    upadtestate.push(data[key])
    if (data[key].id===parseFloat(event.target.id)) {
      upadtestate[key].checkboxstatus=!upadtestate[key].checkboxstatus
      console.log(upadtestate[key].checkboxstatus)
    }
  }
  return upadtestate;
 }
 checkboxupdate=(event)=>{
          this.setState({
            tsak:this.checkupdateloop(event,this.state.tsak),
            conditionaldata:this.checkupdateloop(event,this.state.conditionaldata)
                      }) 
}
cleardata=  (match,data)=>{
let updatesate = []
  for (const key in data) {

    if (match==="selected") {
     if(data[key].checkboxstatus===false){
       updatesate.push(data[key])
     }
      
    }else if(match==="completed"){
      if(data[key].status==="Running"){
        updatesate.push(data[key])
      }
    }else{
      continue
    }
  }
 return updatesate
}
cleartask= (event)=>{

  this.setState({
    tsak:this.cleardata(event.target.id,this.state.tsak),
    conditionaldata:this.cleardata(event.target.id,this.state.conditionaldata)
  })
  console.log(event.target.id)
}
    render() {
        console.log(this.viewresul());
        return (
            <Fragment>
                <Header addtask={this.addtesk.bind(this)} search={this.searchresult} />
                <Control viewstatus={this.view} conditionalview={this.searchresult} cleardata={this.cleartask}/>
                <View updatecheckbox={this.checkboxupdate} view={this.state.view} tasklist={this.viewresul()} ststusUpdate={this.ststusUpdate}/>
            </Fragment>
        );
    }
}

export default Main;