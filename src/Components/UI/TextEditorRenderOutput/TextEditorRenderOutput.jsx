import React from "react";

import katex from "katex";

// for katex
import "katex/dist/katex.min.css";
import "quill/dist/quill.snow.css";

window.katex = katex;

const TextEditorRenderOutput = ({ html }) => {
  return (
    <div style={{ wordBreak: "break" }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default TextEditorRenderOutput;

TextEditorRenderOutput.defaultProps = {
  html: "",
};
