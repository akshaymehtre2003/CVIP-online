const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");

function run() {
  localStorage.setItem('htmlCode', htmlCode.value);
  localStorage.setItem('cssCode', cssCode.value);
  localStorage.setItem('jsCode', jsCode.value);

  output.contentDocument.body.innerHTML = `<style>${localStorage.cssCode}</style>` + localStorage.htmlCode;

  output.contentWindow.eval(localStorage.jsCode);
}

htmlCode.value = localStorage.htmlCode;
cssCode.value = localStorage.cssCode;
jsCode.value = localStorage.jsCode;