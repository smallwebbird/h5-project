import React from 'react';
import './index.less';

export default class H5 extends React.Component {
    render() {
        const prefixCls = 'app-h5';
        return (
            <div className={prefixCls}>我是h5页面</div>
        )
    }
}