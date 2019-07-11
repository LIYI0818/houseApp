import React, { Component } from 'react';
import {HashRouter,Switch,Route} from "react-router-dom"

import Nav from "./pages/Home/Nav"//导航
import Login from "./pages/Login"//登录
import Register from "./pages/Register"//注册
import Error from "./pages/Error"//错误页面
import ForgetPwd from "./pages/ForgetPwd"//忘记密码
import SelectCity from "./pages/Home/SelectCity"//选择城市
import Search from "./pages/Home/Search"//搜索
import Map from "./pages/Home/Map"//地图


import store from "./store"
import {Provider} from "react-redux"

import "./assets/common.css"

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Nav}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/forgetpwd" component={ForgetPwd}></Route>
                        <Route path="/selectcity" component={SelectCity}></Route>
                        <Route path="/search" component={Search}></Route>
                        <Route path="/map" component={Map}></Route>

                        <Route component={Error}></Route>
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}
