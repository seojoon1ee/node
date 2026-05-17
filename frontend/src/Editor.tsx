interface EditorProps {
  content: string;
  onChange: (value: string) => void;
}

function Editor({ content, onChange }: EditorProps) {
  return (
    <textarea 
      value={content}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Start typing your note here..."
      id="editor"
    />
  );
};

export default Editor;