/**
 * Created by Patryk on 2017-04-06.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputForm from "./containers/InputForm";
import store from "./reducers/index";
import {Provider} from 'react-redux';
import {createStore} from 'redux';


ReactDOM.render(<Provider store={store}>
                  <InputForm store={store}/>
                </Provider>, document.getElementById('body'));

