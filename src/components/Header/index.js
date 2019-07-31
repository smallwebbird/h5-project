import React  from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends React.Component {
    render() {
        const prefixCls = 'app-header'
        return (
            <ul className={prefixCls}>
                <li><Link to="/">h5调用自身</Link></li>
                <li><Link to="/h5">h5调用原生</Link></li>
            </ul>
        )
    }
}