import React, { Component,Fragment } from 'react';
import Items from '../api/Items';
import { withTracker } from 'react-meteor-data-with-tracker';
import Item from './Item';

class App extends Component{
    addItems = (event) => {
        event.preventDefault();
        const itemOne = this.refs.itemOne.value.trim()
        const itemTwo = this.refs.itemTwo.value.trim()
        //check if the input is enpty//
        if (itemOne != '' && itemTwo != '') {
            Meteor.call('insertNewItem', itemOne, itemTwo, (err, res) => {
                if (!err) {
                     //reset the input//
                    this.refs.itemOne.value = '';
                    this.refs.itemTwo.value = '';
                }
            });
        }

    }
    render() {

        return (
            <Fragment>
                <header>
                    <h1>Voting</h1>
                </header>
                <main>
                    <form onSubmit={this.addItems}>
                        <input type='text' ref='itemOne'/>
                        <input type='text' ref='itemTwo'/>
                        <button type='submit'>Add Items</button>
                    </form>
                    {this.props.items.map((item) => { return <Item key={item._id}item={item}/>})}
                </main>
            </Fragment>
           
        )
    }
}

//create comtainer to acess data in the front//

export default MyListItem = withTracker(() => {
    return {
        items:Items.find({}).fetch()
    }
})(App)

