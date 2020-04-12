import React, { Component } from 'react'
import Items from '../api/Items'

export default class Item extends Component {

    voteOne = () => {
        Meteor.call('voteOnItem',this.props.item, 'itemOne')
    };
    voteTwo = () => {
         Meteor.call('voteOnItem',this.props.item, 'itemTwo')
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
