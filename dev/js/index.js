import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

const store = createStore();

ReactDOM.render(
    <h1>Hey now</h1>,
    document.getElementById('root')
);
