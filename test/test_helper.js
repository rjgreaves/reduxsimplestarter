import jsdom from 'jsdom';
import jquery from 'jquery';

// Set up testing environment like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a given react class



// Build helper for simulating events



// Set up chai-jquery