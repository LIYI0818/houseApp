import React, { Component } from 'react'

import "./House.css"

export default class House extends Component {
    render() {
        let {src,name,area,range,type,point,price} = this.props.data
        return (
            <div>
                <div className="like_list">
                    <img src={src} alt=""/>
                    <div className="info">
                        <h2>{name}</h2>
                        <p><span>{area}</span><span>{range}</span></p>
                        <p><span>{type}</span><span>{point}平</span></p>
                    </div>
                    <div className="price">{price}/平</div>
                </div>
            </div>
        )
    }
}
