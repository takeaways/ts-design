import * as React from 'react';
import * as ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './App';

const Hot = hot(App);

ReactDom.render(<Hot />, document.querySelector('#root'));
