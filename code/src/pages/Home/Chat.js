import React, { Component } from 'react'
import {WhiteSpace,Flex, Button} from "antd-mobile"



export default class Chat extends Component {
    render() {
        return (
            <div style={ {height:"100%",display:"flex",justifyContent:"center",alignItems:"center"} }>
                <div style={ {width:"80%",height:"48%",background:"#fff"} }>
                     <WhiteSpace size="lg" />
                     <Flex justify="center">
                        <img style={{width:"40%",borderRadius:"50%",margin:"0px 30%"}} 
                        src={require("../../assets/imgs/portrait.jpg")} alt="" />  
                     </Flex>
                     <Flex justify="center">
                        <p style={{margin:"22px 0 10px",fontSize:"18px",color:"#666"}}>置业顾问: 
                          <span style={{fontWeight:"bold",color:"#33A3F4",marginLeft:"10px"}}>小貂蝉</span>
                        </p>
                     </Flex>
                     <Flex justify="center">
                         <p style={{fontSize:"18px",color:"#666",margin:"0 10%"}}>专业服务诚信做人诚心做事</p>
                     </Flex>
                     <Flex justify="center">
                     <Button style={ {background:"#33A3F4",padding:"0 20px",color:"#fff",marginTop:"20px"} }>我要聊天</Button>
                     </Flex>
                </div>
            </div>
        )
    }
}

