const App = new Vue({
  el: "#App",
  data: {
    msg: "hi there",
  }
});

const HuskEditorOptions = {
  editor: document.getElementById('Editor'), // {DOM Element} [required]
  class: 'pen', // {String} class of the editor,
  debug: false, // {Boolean} false by default
  textarea: '<textarea name="content"></textarea>', // fallback for old browsers
  list: [
    'blockquote', 'h2', 'h3', 'p', 'insertorderedlist', 'insertunorderedlist',
    'indent', 'outdent', 'bold', 'italic', 'underline', 'createlink'
  ], // editor menu list
  linksInNewWindow: true // open hyperlinks in a new windows/tab
}

const HuskEditor = new Pen(HuskEditorOptions);