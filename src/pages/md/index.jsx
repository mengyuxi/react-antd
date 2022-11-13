import refMd from '../../assets/md/test.md';
import 'github-markdown-css';
import React from "react";
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