import React, { Component } from 'react'
import { MainLayout, EditorViewerLayout, MainEditor, MainViewer } from './components'
import 'codemirror/lib/codemirror.css'
import './codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import { isJSON } from './utils'

const initialCode = `{
  "array": [
    1,
    [],
    3
  ],
  "boolean": true,
  "null": null,
  "number": 123,
  "object": {
    "a": "b",
    "c": "d",
    "e": "f"
  },
  "string": "Hello World"
}`

class App extends Component {
  state = {
    code: initialCode,
    isCodeValidJSON: true
  }

  onChangeCode = code => this.setState({ code, isCodeValidJSON: isJSON(code) })

  render () {
    const { state: { code, isCodeValidJSON }, onChangeCode } = this

    return (
      <MainLayout>
        <EditorViewerLayout
          editor={
            <MainEditor code={code} onChangeCode={onChangeCode} />
          }
          viewer={
            <MainViewer code={code} isCodeValidJSON={isCodeValidJSON} />
          }
        />
      </MainLayout>
    )
  }
}

export default App