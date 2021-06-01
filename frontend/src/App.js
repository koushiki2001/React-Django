import axios from 'axios' ;
import React , {Component} from 'react';

const tasks = [
  {
    "id": 2,
    "title": "Play Music",
    "description": "Play Piano",
    "completed": true
},
{
    "id": 3,
    "title": "Order Food",
    "description": "Order Lunch from Subway",
    "completed": false
},
]

export default class App extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      viewCompleted:false,
      taskList: tasks,
    }
  }

  displayCompleted = (status) => {

    if(status){
      return this.setstatus({viewCompleted: true});
    }

    else{
      return this.setstatus({viewCompleted: false});
    }
  }

  renderTabList = () => {
    return(
      <div className="my-5 tab-list">
        <span></span>
      </div>
    )
  }
}
