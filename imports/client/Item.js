import React, { Component } from 'react'
import Items from '../api/Items'

export default class Item extends Component {

    voteOne = () => {
        Items.update(this.props.item._id, {
            $inc: {
                'itemOne.value': 1
            }
        })
    };
    voteTwo = () => {
        Items.update(this.props.item._id, {
            $inc: {
                'itemTwo.value': 1
            }
        })
    };

//hi




    render() {
        const {item} = this.props
        return (
            <div className="item">
                <div className="vote-one" onClick={this.voteOne}>
                    <span>{item.itemOne.value}</span>
                    <h3>{item.itemOne.text}</h3>
                </div>
                <span>vs</span>
                <div className="vote-two" onClick={this.voteTwo}>
                    <span>{item.itemTwo.value}</span>
                    <h3>{item.itemTwo.text}</h3>
                </div>
            </div>
        )
    }
}
