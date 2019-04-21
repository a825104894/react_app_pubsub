import React, {Component} from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component{
    state={
        searchName:''
    }
    handleSearch=()=>{
        PubSub.publish('searchName',this.searchName)
    }
    handleChange=(event)=>{
        const searchName=event.target.value;
        this.setState({searchName});
    }
    render(){
        const {searchName}=this.state
     return    <div>
         <input  value={searchName} type="text" onChange={this.handleChange}/><button type="button" onClick={this.handleSearch}>Search</button>
     </div>
    }
}