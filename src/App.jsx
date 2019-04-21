import React, {Component} from 'react'
import Search from'./Search.jsx'
import Show from './Show.jsx'
export default class  extends Component{
    render(){
     return  <div>
         <Search/>
         <Show/>
        </div>
    }
}