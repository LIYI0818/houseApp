import React, { Component } from 'react'
import {InputItem,WingBlank,Checkbox,WhiteSpace,Button,Flex,Toast} from "antd-mobile";

import {Link} from "react-router-dom";

import {GoRegister} from "../apis/apis"

const CheckboxItem = Checkbox.CheckboxItem;//单选框

let inputCss = {
    fontSize:"16px"
}

export default class Register extends Component {
    constructor(){
        super()

        this.state = {
            tel : "",
            pwd : "",
            code : "",
            error:"none"
        }
    }
    render() {
        return (
            <div style={ {height:"100%",background:"#fff"} }>
                <WhiteSpace size="lg" />
                <WingBlank>        
                    <InputItem
                        placeholder="请输入手机"
                        clear
                        style={ inputCss }
                        value={this.state.tel}
                        onChange={(val) => {this.setState( {tel:val} )}}
                    >
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        style={ inputCss }
                        value={this.state.pwd}
                        onChange={(val) => {this.setState({pwd:val})}}
                    >
                    </InputItem>
                    <InputItem
                        placeholder="请输入验证码"
                        clear
                        style={ inputCss }
                        value={this.state.code}
                        onChange={(val) => {this.setState( {code:val} )}}
                    >
                    </InputItem>
                    <Flex justify="center">
                        <p style={{display:this.state.error,color:"red"}}>注册失败</p>
                    </Flex>
                    <CheckboxItem>
                        <p style={{fontSize:"12px"}}>我已同意<span style={{color:"#108ee9"}}>《用户服务协议》及《隐私权政策》</span></p>
                    </CheckboxItem>

                    <Button type="primary" onClick={this.register.bind(this)}>注册</Button>
                    <WhiteSpace size="lg" />
                    <Link to="/login" style={ {color:"#108ee9"} }>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
    async register(){
        if(this.state.tel === "" || this.state.pwd === ""){
             Toast.fail('请填写正确填写手机号或密码 !!!', 1);
             return ;
        }

        let res = await GoRegister(this.state.tel,this.state.pwd)

        if(res.data === "ok"){
           
            //跳转到登录页面
            window.location.href = "#/login"
        }else{
            
            this.setState({
                error : "block"
            })
        }
    }
}
