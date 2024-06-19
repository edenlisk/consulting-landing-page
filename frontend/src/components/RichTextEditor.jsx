import React, { useRef } from 'react';
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


const RichTextEditor = () => {
    // const [htmlContent, setHtmlContent] = useState('');
    const rteRef = useRef();
    const navigate = useNavigate();

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
    // const handleGetHtmlContent = () => {
    //     if (rteRef.current) {
    //         setHtmlContent(rteRef.current.getHtml());
    //     }
    // }

    const htmlString = '<header>\n' +
        '        <h1>Exploring Space</h1>\n' +
        '    </header>\n' +
        '\n' +
        '    <section>\n' +
        '        <h2>Introduction to Space Exploration</h2>\n' +
        '        <p>Space exploration is the investigation of outer space using spacecraft and satellites. It includes both manned and unmanned missions.</p>\n' +
        '    </section>\n' +
        '\n' +
        '    <section>\n' +
        '        <h2>Notable Space Missions</h2>\n' +
        '        <h3>Apollo Missions</h3>\n' +
        '        <p>The Apollo program, conducted by NASA, achieved the first manned moon landing in 1969 with Apollo 11.</p>\n' +
        '        \n' +
        '        <h3>Voyager Missions</h3>\n' +
        '        <p>The Voyager probes were launched in the late 1970s and have provided valuable data about outer planets and interstellar space.</p>\n' +
        '    </section>\n' +
        '\n' +
        '    <section>\n' +
        '        <h2>Images from Space</h2>\n' +
        '        <img src="https://example.com/space-image1.jpg" alt="Space Image 1">\n' +
        '        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrftUWl-7SmpcxZ8JuRhkXFjMmPLo9vqJWXg&s" alt="Space Image 2">\n' +
        '    </section>\n' +
        '\n' +
        '    <section>\n' +
        '        <h2>Interesting Facts about Space</h2>\n' +
        '        <ul>\n' +
        '            <li>Space is completely silent because there is no atmosphere to carry sound waves.</li>\n' +
        '            <li>The largest volcano in the solar system is on Mars - Olympus Mons.</li>\n' +
        '            <li>The International Space Station travels at a speed of approximately 28,000 kilometers per hour (17,500 miles per hour).</li>\n' +
        '        </ul>\n' +
        '    </section>\n' +
        '\n' +
        '    <footer>\n' +
        '        <p>Explore more about space at <a href="https://www.nasa.gov">NASA\'s website</a>.</p>\n' +
        '    </footer>'

    const handleSaveFile = async () => {
        // handleGetHtmlContent();
        let htmlContent = "";
        if (rteRef.current) {
            htmlContent = rteRef.current.getHtml();
            console.log(htmlContent);
        }
    }


    return (
        <div>
            <button onClick={handleSaveFile}>save</button>
            {!htmlString ? <div>Loading...</div>
                : (
                    <>
                        <RichTextEditorComponent ref={rteRef} height={600} toolbarSettings={toolbarSettings}>
                            <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user
                                experience to create and update the content.
                                Users can format their content using standard toolbar commands.</p>
                            <p><b>Key features:</b></p>
                            <div>{ReactHtmlParser(htmlString)}</div>
                            <Inject services={[Toolbar, HtmlEditor, Image, Link, Table]}/>
                        </RichTextEditorComponent>
                    </>
                )
            }
        </div>
    )
}

export default RichTextEditor;