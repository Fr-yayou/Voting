import React, { Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html'  //don't forget to import the main.html

import App from '../imports/client/App'

Meteor.startup(() => {
    render(<App />, document.getElementById("root"));
    
})
