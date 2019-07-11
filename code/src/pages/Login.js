import React, { Component } from 'react'
import {Flex,WhiteSpace,InputItem,WingBlank,Button,Toast} from "antd-mobile";
import {Link} from "react-router-dom"

import {GoLogin} from "../apis/apis"

let logo = require("../assets/imgs/logo.jpg");

let protocol = {
    position:"fixed",
    bottom:"0px",
    width:"100%",
    textAlign:"center",
    color:"#666"
}

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            user:"",//用户名
            pwd:"",//密码
            error:"none"
        }
    }

    render() {
        return (
            <div style={ {height:"100%",background:"#fff"} }>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <Flex justify="center">
                    <img style={{width:"40%"}} src={logo} alt="贝壳网"></img>
                </Flex>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <InputItem
                        placeholder="请输入手机号"
                        clear
                        value={this.state.user}
                        onChange={ (val) => {this.setState({user:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require("../assets/imgs/icon_user.png")})`,
                         backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={this.state.pwd}
                        type="password"
                        onChange={ (val) => {this.setState({pwd:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require("../assets/imgs/icon_pwd.png")})`,
                         backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <Flex justify="center">
                        <p style={{display:this.state.error,color:"red"}}>用户名或密码不正确</p>
                    </Flex>
                    
                    <WhiteSpace size="lg" />
                    <Button type="primary" onClick={this.login.bind(this)}>登录</Button>
                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                        <Link to="/register" style={{color:"#108ee9"}}>手机快速注册</Link>
                        <Link to="/forgetpwd" style={{color:"#108ee9"}}>忘记密码?</Link>
                    </Flex>
                </WingBlank>
                <p style={ protocol }>登录/注册即代表同意《贝壳房产用户协议》</p>
            </div>
        )
    }

    async login(){
         let res = await GoLogin(this.state.user,this.state.pwd);

         if(res.data === "ok"){//登录成功
            Toast.success('登录成功!!!', 1);

            window.localStorage.setItem("user",this.state.user)

            //跳转到首页
            setTimeout( () => {
                window.location.href = "#/"
            },100)
            
         }else{//登录失败
              Toast.fail('登录失败 !!!', 1);
              //显示错误提示
              this.setState({
                  error : "block"
              })
         }
    }
}
