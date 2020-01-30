import App from './App.js'

const panelForm = document.querySelector('.panel__order');
const inputCSV = document.querySelector('.uploader__input');

const fullNameForm = panelForm.elements

const run = new App(inputCSV,fullNameForm);
run.initialEvent();


