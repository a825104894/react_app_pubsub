import React, {Component} from 'react'
import logo from './logo.svg'
import PubSub from'pubsub-js'
import axios from 'axios'
export default class Show extends Component{
    state={
        init:true,
        request:false,
        users:null,
        errrormsg:null
    }
    componentDidMount() {
        PubSub.subscribe('searchName',(msg,searchName)=>{
            this.setState({init:false,request:true,users:null,errrormsg:null})

            const url=`https://api.github.com/search/users?q=${searchName}`
            axios.get(url).then((response)=>{
                const result=response.data
                console.log(result)
                const users=result.items.map(item=>{
                    return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}
                })
                console.log(users)
                this.setState({request:false,users})

            }).catch(error=>{
                this.setState({request:false,errormsg:error.message})
            })
        })
    }

    render(){
        const {init,request,users,errormsg}=this.state
        if(init){
            return <div>请进行关键字搜索</div>
        }else if(request){
            return <div>正在请求中.....</div>
        }else if(errormsg){
            return <div>errormsg</div>
        }else{
            return  users.map((item,index)=>
                (<div key={index}>
                        <a href={item.url}>
                            <img src={item.avatarUrl} style={{width:'50px',height:'50px'}}/>
                        </a>
                    <br/>
                    <span >{item.name}</span>
                </div>
                )
            )

        }

    }
}