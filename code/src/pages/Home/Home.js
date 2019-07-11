import React, { Component } from 'react'
import {Carousel,Grid} from "antd-mobile"
import Bscroll from "better-scroll"

import {GetHouseList} from "../../apis/apis"

import House from "../../components/House"

import {connect} from "react-redux"

import "./Home.css"

//导航数据
const data = [
   {icon:"home_house_1",text:"新房"},
   {icon:"home_house_2",text:"二手房"},
   {icon:"home_house_3",text:"租房"},
   {icon:"home_house_4",text:"商铺写字楼"},
   {icon:"home_house_5",text:"卖房"},
   {icon:"home_house_6",text:"海外房产"},
   {icon:"home_house_7",text:"小区房价"},
   {icon:"home_house_8",text:"问答"}
].map((_val, i) => ({
   icon: require(`../../assets/imgs/${_val.icon}.png`),
   text: _val.text
 }));
//攻略数据
 const list = [
   {icon:"icon_money",text:"我要贷款"},
   {icon:"icon_count",text:"房贷计算"},
   {icon:"icon_knowledge",text:"知识"},
   {icon:"icon_richscan",text:"扫一扫"},
 ].map((_val, i) => ({
   icon: require(`../../assets/imgs/${_val.icon}.png`),
   text: _val.text
 }));
class Home extends Component {
    constructor(){
       super()


       this.state = {
         data: ['banner_home_1', 'banner_home_2', 'banner_home_3'],//轮播图
         imgHeight: 176,
         city:"定位中",
         houseList:[]
       }
    }

    async componentWillMount(){
        let res = await GetHouseList()
        let listArr = res.data;
       
        this.setState({
           houseList : listArr
        })
        
    }

    render(){
       return (
          <div style={{height:"100%"}}>
                  <div className="home_div">
                        <label onClick={this.SelectCity}>{this.state.city}▼</label>
                        <div className="search_div" onClick={this.Search}>
                              <img src={require("../../assets/imgs/icon_search.png")} alt=""/>
                              <label>挑好房，上贝壳APP</label>
                        </div>
                        <img onClick={this.Map} src={require("../../assets/imgs/icon_map.png")} alt=""/>
                  </div>
                  <div className="home_content" style={{overflow:"auto",height:"100%"}}>
                    <ul className="content" style={{paddingLeft:"0",marginTop:"0"}}>
                        <Carousel
                           autoplay
                           infinite
                        >
                           {this.state.data.map(val => (
                              <a
                              key={val}
                              href="http://www.alipay.com"
                              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                              >
                              <img
                                 src={require(`../../assets/imgs/${val}.jpg`)}
                                 alt=""
                                 style={{ width: '100%', verticalAlign: 'top' }}
                              />
                              </a>
                           ))}
                        </Carousel>

                        <Grid data={data} isCarousel hasLine={false} onClick={_el => console.log(_el)} />

                        <div className="strategy">
                           <div className="title">
                                 <label>房产全百科</label>
                                 <span>专业的买房攻略</span>
                           </div>
                           {/*  房产全百科 */}
                           <Grid data={list} hasLine={false}/>
                        </div>

                        <div className="like">
                           <div className="like_title">猜你喜欢</div>
                           {
                              this.state.houseList.map( val => <div onClick={this.getHouse.bind(this,val)} key={val.id}>
                                 <House data={val}></House>
                              </div>)
                           }
                           
                        </div>
                     </ul>
                  </div>
             

          </div>
       )
    }
    
    //获取点击的房产列表
    getHouse(obj){

        this.props.dispatch({
            type : "history",
            obj
        })
    }

    SelectCity(){
        
       //跳转到选择城市页面
       window.location.href = "#/selectcity"
    }
    Search(){
       //跳转到搜索页面
       window.location.href = "#/search"
    }
    Map(){
        //跳转到地图页面
        window.location.href = "#/map"
    }
    //地图
    componentDidMount(){

         //保存当前this
         var _this = this;
         //实例化城市查询类
         var citysearch = new window.AMap.CitySearch();
         //自动获取用户IP，返回当前城市
         citysearch.getLocalCity(function(status, result) {
             if (status === 'complete' && result.info === 'OK') {
                 if (result && result.city && result.bounds) {
                     var cityinfo = result.city;
                     // var citybounds = result.bounds;
                     

                     _this.setState({
                        city : cityinfo
                     })
                     // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                     //地图显示当前城市
                     // map.setBounds(citybounds);
                 }
             } else {
               //   document.getElementById('info').innerHTML = result.info;
             }
         });

         //better-scroll
         _this.home_scroll = new Bscroll(".home_content",{
            click:true
         })
    }
}

export default connect()(Home)