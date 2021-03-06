import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import Signin from './Component/Signin';
import Registration from './Component/Registration';
import Appointment from './Component/Appointment';
import NavigationBar from './Component/NavigationBar'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './Store/Store';

ReactDOM.render(
<Provider store={store}>
<NavigationBar />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
