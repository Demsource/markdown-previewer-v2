import './App.css';
import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const marked = require('marked');

class App extends Component {
  state = {
    markdown: `\
# This is Markdown Previewer By Demo

## Bootstrap is utilized

Heres some HTML code, \`<div></div>\`

\`\`\`
// this is multi-line code:

function sum(a, b) {
return a + b;
}
\`\`\`

**bold text**

_italic text_

**_both!_**

~~crossing stuff out~~.

> Block Quote

* First
* Second
* Third

[![Github Logo](https://marked.js.org/img/logo-black.svg)](https://marked.js.org/)`
  }

  updateMarkdown(markdown) {
    this.setState({markdown})
  }

  render() {
    let {markdown} = this.state;
    return (
      <div className="App container-fluid">
        <h1 className='text-info'>Markdown Previewer v2 By Demo</h1>
        <Form>
          <Form.Group>
            <Form.Label>Enter Markdown</Form.Label>
            <Form.Control as="textarea" rows='10' placeholder={markdown} onChange={(e) => this.updateMarkdown(e.target.value)} id="editor" />
          </Form.Group>
        </Form>
        <div>
          <h5>Preview Converted Markdown:</h5>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {breaks: true})}}></div>
        </div>
      </div>
    );
  }
}

export default App;
