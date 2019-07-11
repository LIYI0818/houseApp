import React, { Component } from 'react'
import data from "./SelectCity.json"

import Bscroll from "better-scroll"

import "./SelectCity.css"

export default class SelectCity extends Component {
   
    render() {
        
        return (
            <div className="SelectCity">
                
                {/* 右侧 */}
                <div className="cityMenu" onTouchMove={this.touchmove.bind(this)}>
                    {
                        data.city.map( (item) => <p className="c_city_cls" key={item.title} 
                        >{item.title}</p>)
                    }
                </div>
                {/* 左侧 */}
                <div className="city_div">
                    <ul className="content" style={{padding:"0"}}>
                    <h2>选择城市</h2>
                        <div>
                            {
                                data.city.map(obj => 
                                <div id={obj.title} key={obj.title} style={{width:"100%"}}>
                                    <h3>{obj.title}</h3>
                                    <div className="citys">
                                        {
                                            obj.lists.map(val => <div className="city_item">{val}</div>)
                                        }
                                    </div>
                                </div>)
                            } 
                        </div>
                    </ul>
                </div>
                
            </div>
        )
    }
    touchmove(e){
        //e.touches是移动端的  意思是触摸的手指
        // console.log(e.touches[0].clientX)
        // console.log(e.touches[0].clientY)

       let curElt = document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY);
       
       if(curElt && curElt.className === "c_city_cls"){
           //是触摸到左侧列表才进行滑动
           this.SelectCity_scroll.scrollToElement(document.getElementById(curElt.innerHTML),300)
       }
    }
    componentDidMount(){

        this.SelectCity_scroll = new Bscroll(".city_div",{
            click:true
        })
    }
}
