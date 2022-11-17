import React from 'react';
import { marked } from 'marked';

const HEADING = '<h1></h1>';
const SUB_HEADING = '<h2></h2>';
const LINK = '<link rel="stylesheet" href="../index.css">';
const INLINE_CODE ='<code></code>';
const CODE_BLOCK = '\`\`\` <pre><code></code></pre>\`\`\`';
const LIST_ITEM = '<ul><li></li></ul>';
const BLOCKQUOTE ='<blockquote></blockquote>';
const IMAGE = '<img src="https://i.kym-cdn.com/entries/icons/original/000/004/109/jesusmannn.jpg">';
const BOLDED_TEXT = '<strong></strong>'
//const MARKUP = [HEADING, SUB_HEADING, LINK, INLINE_CODE,CODE_BLOCK,LIST_ITEM,BLOCKQUOTE,IMAGE,BOLDED_TEXT].join('\n')
const MARKUP = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`


class Editor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: marked.parse(MARKUP)
        };
        
    // 
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({
            input: marked.parse(event.target.value)}
             )
    };
    
    render(){
        return <div>
        <textarea id='editor' onChange={this.handleChange}  >{MARKUP}</textarea>
        <div id='preview' style={{ 'backgroundColor': 'red' }} dangerouslySetInnerHTML={{__html: this.state.input}}></div>
        </div>
        
    }
    
};

export default Editor;
