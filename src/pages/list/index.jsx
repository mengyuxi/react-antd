import React, { useEffect, useRef } from 'react';
import refMd from '../../assets/md/test.md';

import 'github-markdown-css';

function List (props) {
    const ifr = useRef(null);
    useEffect(()=>{
        window.addEventListener('message', e => {
            console.log('字页面传输过来参数', e.data);
        });

    }, []);

    const handClick = ()=>{
        let data = 'xxxxxxx';
        ifr.current.contentWindow.postMessage(data, '*');
    };
    const rawHtml = {
        __html: refMd
    };
    return (
        <>
            <h1 onClick={handClick}>列表页</h1>
            <div className="markdown-body" dangerouslySetInnerHTML={rawHtml}></div>
            <iframe src="http://localhost:3000/" frameBorder="0" ref={ifr}></iframe>
        </>
    );
}

export default List;
