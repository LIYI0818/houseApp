import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import Home from "./Home"
import Chat from "./Chat"
import History from "./History"
import MyInfo from "./MyInfo"

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'Home',
          tabList:[
              {id:"Home",title:"首页",icon:"icon_home"},
              {id:"Chat",title:"微聊",icon:"icon_chat"},
              {id:"History",title:"足迹",icon:"icon_history"},
              {id:"Myinfo",title:"我的信息",icon:"icon_myinfo"},
          ]
        };
      }
    
      renderContent(id) {
           switch(this.state.selectedTab){
               case 'Home' : return <Home/>
               case 'Chat' : return <Chat/>
               case 'History' : return <History/>
               case 'Myinfo' : return <MyInfo/>
           }
      }
    
      render() {
        return (
          <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              
            >
                 {
                     this.state.tabList.map(  obj => <TabBar.Item
                        title={obj.title}
                        key={obj.id}
                        icon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: `url(${require("../../assets/imgs/"+ obj.icon +".png")}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: `url(${require("../../assets/imgs/"+ obj.icon +"_s.png")}) center center /  21px 21px no-repeat` }}
                        />
                        }
                        selected={this.state.selectedTab === obj.id}
                        onPress={() => {
                          this.setState({
                            selectedTab: obj.id,
                          });
                        }}
                      >
                        {this.renderContent(obj.id)}
                      </TabBar.Item>)
                 }
            </TabBar>
          </div>
        );
      }
}
