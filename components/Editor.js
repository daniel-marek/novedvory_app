import { useEffect, useState, useRef } from 'react'

const Editor = ({ data, onChange }) => {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }
    setEditorLoaded(true)
  }, [])
  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={data}
          // OnReady={editor => {
          //   // You can store the "editor" and use when it is needed.
          //   console.log('Editor is ready to use!', editor);
          // }}
          onChange={onChange}
          // onBlur={(event, editor) => {
          //   console.log('Blur.', editor);
          // }}
          // onFocus={(event, editor) => {
          //   console.log('Focus.', editor);
          // }}
        />
      ) : (
        'loading editor'
      )}
    </div>
  )
}

export default Editor
