/* The article keeps its equations as editable LaTeX. All rendering is local. */
"use strict";
renderMathInElement(document.querySelector("article"), {
  delimiters: [
    { left: "\\[", right: "\\]", display: true },
    { left: "\\(", right: "\\)", display: false }
  ],
  throwOnError: true,
  trust: false
});
