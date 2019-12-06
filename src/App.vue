<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="onEditorReady"></ckeditor>

    </div>
</template>

<script>
    /* eslint-disable no-console */

    import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

    import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
    import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
    import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
    import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
    import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
    import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
    import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
    import Indent from '@ckeditor/ckeditor5-indent/src/indent';
    import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
    import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
    import Font from '@ckeditor/ckeditor5-font/src/font';
    import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
    import Image from '@ckeditor/ckeditor5-image/src/image';
    import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
    import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
    import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
    import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
    import EasyImage from './js/easyimage';
    import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';


    import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
    import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';

    import Table from '@ckeditor/ckeditor5-table/src/table';
    import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';


    import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
    import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
    import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

    // import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

    // import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'

export default {
    name: 'app',
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                toolbarStartupExpanded: true,
                tabSpaces: 4,
                plugins: [
                    EssentialsPlugin,
                    BoldPlugin,
                    ItalicPlugin,
                    LinkPlugin,
                    ParagraphPlugin,
                    Highlight,
                    RemoveFormat,
                    Indent,
                    IndentBlock,
                    HorizontalLine,
                    Font,
                    CodeBlock,
                    EasyImage,
                    // CKFinder,
                    MediaEmbed,
                    Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize,
                    // PasteFromOffice,
                    Autoformat,WordCount,Autosave,
                    TodoList,PageBreak,
                    Table, TableToolbar
                ],

                toolbar: {
                    items: [
                        'bold',
                        'italic',
                        'codeBlock',
                        'link',
                        'undo',
                        'redo',
                        'highlight',
                        'codeLight',
                        'imageUpload',
                        // 'ckfinder',
                        'mediaEmbed',
                        'todoList',
                        'insertTable',
                        'removeFormat',
                        'pageBreak',
                        'outdent', 'indent',
                        'horizontalLine',
                        'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
                    ]
                },
                highlight: {
                    options: [
                        {
                            model: 'greenMarker',
                            class: 'marker-green',
                            title: 'Green marker',
                            color: 'var(--ck-highlight-marker-green)',
                            type: 'marker'
                        },
                        {
                            model: 'redPen',
                            class: 'pen-red',
                            title: 'Red pen',
                            color: 'var(--ck-highlight-pen-red)',
                            type: 'pen'
                        }
                    ]
                },
                fontFamily: {
                    options: [
                        'default',
                        'Ubuntu, Arial, sans-serif',
                        'Ubuntu Mono, Courier New, Courier, monospace'
                    ]
                },
                image: {
                    toolbar: [ 'imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side','imageStyle:alignLeft','imageStyle:alignCenter','imageStyle:alignRight' ],
                    styles: [ 'full', 'side', 'alignLeft' ,'alignCenter' ,'alignRight' ]
                },
                ckfinder: {
                    // Upload the images to the server using the CKFinder QuickUpload command.
                    uploadUrl: 'http://localhost:8080/upload',

                    // Define the CKFinder configuration (if necessary).
                    options: {
                        resourceType: 'Images'
                    }
                },
                mediaEmbed: {

                },
                table: {
                    contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
                },
                codeBlock: {
                    languages: [
                        { language: 'css', label: 'CSS' },
                        { language: 'xml', label: 'HTML/XML' },
                        { language: 'java', label: 'java' }
                    ]
                },
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                        {
                            model: 'headingFancy',
                            view: {
                                name: 'h2',
                                classes: 'fancy'
                            },
                            title: 'Heading 2 (fancy)',
                            class: 'ck-heading_heading2_fancy',

                            // It needs to be converted before the standard 'heading2'.
                            converterPriority: 'high'
                        }
                    ]
                },
                wordCount: {
                    onUpdate: stats => {
                        console.log(stats)
                    }
                },
                autosave: {
                    save( editor ) {
                        // todo
                        console.log(editor)
                    }
                },
            }
        };
    },
    methods: {
        onEditorReady(e){
            console.log(Array.from( e.ui.componentFactory.names()))
        }
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
