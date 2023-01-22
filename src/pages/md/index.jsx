import React from "react";
import 'github-markdown-css';
import refMd from '../../assets/md/test.md';

export default function Md(){
    const rawHtml = {
        __html: refMd
    };
    return(
        <>
            <div className="markdown-body" dangerouslySetInnerHTML={rawHtml}></div>
        </>
    );
}