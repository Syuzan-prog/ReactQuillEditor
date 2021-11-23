

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}


  export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block"
  ];

// export const models = {
//     toolbar: {
//       container: "#toolbar",
//       handlers: {
//         undo: undoChange,
//         redo: redoChange
//       }
//     },
//   };

export const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"]
  ]
};