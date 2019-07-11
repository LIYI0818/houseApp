import React, { Component } from 'react'
import Bscroll from "better-scroll"

import House from "../../components/House"

import {connect} from "react-redux"



class History extends Component {
    render() {
        let {history} = this.props
        return (
            <div id="history_div" style={{height:"100%",background:"#fff",padding:"10px",overflow:"auto"}}>
                    <ul className="content" style={{padding:"0",margin:"0"}}>
                        <h3 style={{marginTop:"0",display:history.length === 0 ? "none" : "block"}}>历史足迹</h3>
                        <h3 style={{marginTop:"0",display:history.length === 0 ? "block" : "none"}}>历史记录空空如也</h3>
                            {
                                history.map( obj => <House key={obj.id} data={obj}></House>)
                            }
                    </ul>
            </div>
        )
    }
    componentDidMount(){
        this._scroll = new Bscroll("#history_div",{
            click:true
        })
    }
   
}

export default connect((state) => {
   return {
      history : state.houseList
   }
})(History)
