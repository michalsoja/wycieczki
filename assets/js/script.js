import App from './App.js'

const panelForm = document.querySelector('.panel__order');
const inputCSVEl = document.querySelector('.uploader__input');
const ulExcursionEl = document.querySelector('.panel__excurions');
const ulSummaryEl = document.querySelector('.panel__summary');

const fullNameForm = panelForm.elements

const run = new App(inputCSVEl,fullNameForm,ulExcursionEl,ulSummaryEl);
run.initialEvent();


