import App from './App.js'

const panelForm = document.querySelector('.panel__order');
const inputCSVEl = document.querySelector('.uploader__input');
const ulExcursionEl = document.querySelector('.panel__excurions');
const buttonEl = document.querySelector('.panel__summary ')
const form = document.querySelector('.panel__order')

const fullNameForm = panelForm.elements

const run = new App(inputCSVEl,fullNameForm,ulExcursionEl,buttonEl,form);
run.initialEvent();


