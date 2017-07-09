import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai'
import React from 'react';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props}/>
        </Provider>
    );
    return $(ReactDOM.findDOMNode(componentInstance)); // Produces HTML
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
    // To call simulate
    //$('div').simulate
    // this now references the element selected - the div
    if(value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
};


// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export {
    renderComponent,
    expect
}