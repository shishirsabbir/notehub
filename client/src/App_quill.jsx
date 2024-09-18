import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
    const [editorValue, setEditorValue] = useState("");

    return (
        <ReactQuill
            value={editorValue}
            onChange={(value) => setEditorValue(value)}
            modules={{
                toolbar: [
                    // [{ container: "#toolbar" }],
                    [{ size: ["small", false, "large"] }],
                    // [{ font: [] }],
                    ["bold", "italic", "underline"],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { list: "check" },
                    ],
                    ["blockquote", "code-block"],
                    ["link", "formula"],
                ],
            }}
            theme="snow"
        />
    );
}

export default function App() {
    return <Editor />;
}
