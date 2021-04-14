import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/counter';

const element = <h1>hello world</h1>;
ReactDom.render(<Counter/>, document.getElementById('root'));
