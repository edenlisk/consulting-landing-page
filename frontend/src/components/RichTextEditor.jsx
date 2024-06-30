import React, {useEffect, useRef} from 'react';
import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    RichTextEditorComponent,
    Table,
    Toolbar
} from '@syncfusion/ej2-react-richtexteditor';
import ReactHtmlParser from 'html-react-parser';
import { useNavigate } from "react-router-dom";


const RichTextEditor = ({rteRef, htmlContent}) => {
    // const rteRef = useRef();


    const toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'createTable',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };

    // useEffect(() => {
    //     if (rteRef.current.getHtml() !== htmlContent) {
    //         setHtmlContent(rteRef.current.getHtml());
    //     }
    //     console.log('rteref');
    // }, [rteRef, htmlContent]);



    return (
        <div>
            {!htmlContent ? <div>Loading...</div>
                : (
                    <>
                        {/*<button className="p-2 rounded bg-blue-400 w-fit text-white" onClick={handleSaveFile}>Save</button>*/}
                        <RichTextEditorComponent ref={rteRef} height={600} toolbarSettings={toolbarSettings}>
                            <div>{ReactHtmlParser(htmlContent)}</div>
                            <Inject services={[Toolbar, HtmlEditor, Image, Link, Table]}/>
                        </RichTextEditorComponent>
                    </>
                )
            }
        </div>
    )
}

export default RichTextEditor;