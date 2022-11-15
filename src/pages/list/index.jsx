import React from 'react';
import refMd from '../../assets/md/test.md'

import 'github-markdown-css';

function List(props){
    const rawHtml = {
        __html: refMd
    };
    return (
        <>
            <h1>列表页</h1>     
            <div className="markdown-body" dangerouslySetInnerHTML={rawHtml}></div>
        </>        
    )
}

export default List;