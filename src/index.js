import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('react-app'));

serviceWorker.unregister();