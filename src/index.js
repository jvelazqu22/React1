import React from 'react';
import ReactDOM from 'react-dom';
import MyHeader from './MyHeader';
import Header from './Header';


const myfirstelement = <h1>Hello React!</h1>

// ReactDOM.render(myfirstelement, document.getElementById('root'));
//ReactDOM.render(<Garage />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('root'));