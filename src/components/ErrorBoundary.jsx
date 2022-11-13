import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super (props);
        this.state = {
            error: null // 存储当前的报错信息
        };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { error: true };
    }

    componentDidCatch(error, errorInfo) {
        // 统计上报错误信息
        console.log('componentDidCatch...', error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <h1>报错了</h1>;
        }
        // 没有错误就显示子组件
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default ErrorBoundary;
