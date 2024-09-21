// import React, {forwardRef, useEffect, useRef} from 'react';
// import {
//     HtmlEditor,
//     Image,
//     Inject,
//     Link,
//     RichTextEditorComponent,
//     Table,
//     Toolbar
// } from '@syncfusion/ej2-react-richtexteditor';
// import ReactHtmlParser from 'html-react-parser';
// import { useNavigate } from "react-router-dom";
//
//
// const RichTextEditor = ({htmlContent,change,rteRef}) => {
//     // const rteRef = useRef();
//
//     useEffect(() => {
//         if (rteRef && rteRef.current) {
//             rteRef.current.value = htmlContent;
//         }
//     }, [rteRef,htmlContent]);
//
//     console.log('rteref',rteRef.current);
//
//
//
//     const toolbarSettings = {
//         items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
//             'createTable',
//             'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
//             'LowerCase', 'UpperCase', '|',
//             'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
//             'Outdent', 'Indent', '|',
//             'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
//             'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
//     };
//
//
//     const imageSettings = {
//         saveFormat: "Base64"
//     }
//
//
//     return (
//         <div>
//             {!htmlContent ? <div>Loading...</div>
//                 : (
//                     <>
//                         {/*<button className="p-2 rounded bg-blue-400 w-fit text-white" onClick={handleSaveFile}>Save</button>*/}
//                         <RichTextEditorComponent insertImageSettings={imageSettings} ref={rteRef} value={htmlContent} change={change} height={600} toolbarSettings={toolbarSettings}>
//                             {/* <div>{ReactHtmlParser(htmlContent)}</div> */}
//                             <Inject services={[Toolbar, HtmlEditor, Image, Link, Table]}/>
//                         </RichTextEditorComponent>
//                     </>
//                 )
//             }
//         </div>
//     )
// }
//
//
// export default RichTextEditor;

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

const RichTextEditor = ({htmlContent, change, rteRef}) => {
    useEffect(() => {
        if (rteRef && rteRef.current) {
            rteRef.current.value = htmlContent;
        }
    }, [rteRef, htmlContent]);

    const toolbarSettings = {
        items: [
            'Bold', 'Italic', 'Underline', 'StrikeThrough', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', 'Outdent', 'Indent', '|',
            'CreateLink', 'Image', 'CreateTable', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
        ]
    };

    const imageSettings = {
        saveFormat: "Base64"
    };

    return (
        <div>
            {!htmlContent ? <div>Loading...</div> :
                <RichTextEditorComponent
                    insertImageSettings={imageSettings}
                    ref={rteRef}
                    value={htmlContent}
                    change={change}
                    height={600}
                    toolbarSettings={toolbarSettings}
                >
                    <Inject services={[Toolbar, HtmlEditor, Image, Link, Table]} />
                </RichTextEditorComponent>
            }
        </div>
    );
};

export default RichTextEditor;
