import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {List,WhiteSpace} from "antd-mobile"

import "./MyInfo.css"
const Item = List.Item;

export default class MyInfo extends Component {
    constructor(){
        super()

        this.state = {
            menuList:[
                {id:"1",num:0,icon:"icon_wallet",text:"钱包"},
                {id:"2",num:0,icon:"icon_privilege",text:"优惠"},
                {id:"3",num:0,icon:"icon_score",text:"积分"}
            ],
            myList:[
                {id:"1",icon:"icon_list_score",text:"我的积分"},
                {id:"2",icon:"icon_list_subscr",text:"我的订阅"},
                {id:"3",icon:"icon_list_linkman",text:"微聊联系人"},
                {id:"10"},
                {id:"4",icon:"icon_list_calculator",text:"房贷计算器"},
                {id:"5",icon:"icon_list_collect",text:"我的房子"},
                {id:"11"},
                {id:"6",icon:"icon_list_record",text:"我的看房记录"},
                {id:"7",icon:"icon_list_answer",text:"我的问答"},
                {id:"12"},
                {id:"8",icon:"icon_list_set",text:"设置"},
                {id:"9",icon:"icon_list_answer",text:"意见反馈"},
            ],
            curUser:"",//当前登录的用户
            flag:true
        }
    }

    render() {
        return (
            <div className="MyInfo">
                <div className="MyInfo-head">
                     <div className="MyInfo-protrait">
                         <img className="portrait" src={require("../../assets/imgs/portrait.jpg")} alt=""/>
                         <div className="info">
                            <h3 style={{display:this.state.flag ? "block" : "none"}}>
                                  <Link to="/login">登录</Link>/<Link to="/register">注册</Link>
                            </h3>
                            <h3 style={{display:this.state.curUser === "" ? "none" : "block"}}>
                              {this.state.curUser}
                            </h3>
                              <p>可以与经纪人发起聊天</p>
                         </div>
                         <img src={require("../../assets/imgs/icon_set.png")} alt=""/>
                     </div>
                     <ul>
                         {
                             this.state.menuList.map( obj => <li key={obj.id}>
                                <p>{obj.num}</p>
                                <img src={require(`../../assets/imgs/${obj.icon}.png`)} alt=""/>
                                <label>{obj.text}</label>
                            </li>)
                         }
                     </ul>
                     
                </div>
                <div style={{height:"10px",background:"#f3f3f3"}}></div>
                <List>
                    {
                        this.state.myList.map( obj => {
                          if(obj.text){
                             return   <Item key={obj.id} arrow="horizontal" onClick={() => {}}>
                                <img 
                                src={require(`../../assets/imgs/${obj.icon}.png`)} 
                                alt=""  style={{marginRight:"6px",verticalAlign:"top"}}/>
                                <span style={{color:"#888"}}>{obj.text}</span>
                               </Item>
                            }  
                            return <div key={obj.id} style={{height:"10px",background:"#f3f3f3"}}></div>
                         }
                        
                       )
                    }
                </List>

                
            </div>
        )
    }

    componentDidMount(){


        //获取用户信息
       let info = window.localStorage.getItem("user");

       if(info){
            this.setState({
                flag : false
            })
       }
       
       this.setState({
           curUser : info
       })
    }
}
