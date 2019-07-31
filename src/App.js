import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import routes from './api';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    const prefixCls = 'app'
    return (
      <div className={prefixCls}>
        <Header />
        {
          routes.map( (route, index) => (
            index === 0 ? <Route path={route.path} exact component={route.component}/>
                        : <Route path={route.path} component={route.component}/>
          ) )
        }
      </div>
    )
  }
}

