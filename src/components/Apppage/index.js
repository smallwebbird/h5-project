import React from 'react';
import './index.css';

export default class App extends React.Component {
    render() {
        const prefixCls = 'app-app'
        return (
            <div className={prefixCls}>我是app</div>
        )
    }
}