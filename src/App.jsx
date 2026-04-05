import './App.css'
import { useState } from "react"
import { marked } from "https://cdnjs.cloudflare.com/ajax/libs/marked/16.3.0/lib/marked.esm.js";
import DOMPurify from "dompurify";

const Translator = () => {
  const [text, setText] = useState(`
# example (H1) heading

## example (H2) heading

example **bold text** and example *italic text*.

example [link](https://www.markdownguide.org/) to markdown docs.

example inline code: \`console.log('Markdown Previewer')\`

\`\`\`javascript
// Code block example
function add(num1, num2) {
  return num1 + num2;
}
\`\`\`

- example list <item 1>
- example list <item 2>
- example list <item 3>
- example list <item 4>

> example of a blockquote.

![Markdown Logo](https://images.icon-icons.com/2699/PNG/512/markdown_here_logo_icon_169967.png)`);

  const textChanged = (e) => {
    setText(e.target.value)
  }

  const html = DOMPurify.sanitize(marked.parse(text));

  return (
    <>
      <textarea id="editor" placeholder='Enter text here' value={text} onChange={textChanged}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

function App() {
  return (
    <>
      <Translator />
    </>
  );
}

export default App
