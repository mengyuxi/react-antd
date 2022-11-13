import React from 'react';

function Goods(props) {
    return (
        <>
            <h1>商品页</h1>
            <img src={require('../../assets/images/test.gif')} title='正常路径加载测试' />
            <img src={require('../../assets/images/1.jpg')} title='base64图片测试' />
        </>
    );
}

export default Goods;
