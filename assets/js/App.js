import CSVFileReader from './CSVFileReader.js'
import ValidationCSVFile from './ValidationCSVFile.js'
import ValidationOffer from './ValidationOffer.js'
import SummaryElement from './SummaryElement.js'
import FormSender from './FormSender.js'

export default class App{
    constructor(inputCSVEl,fullNameForm,ulExcursionEl,buttonEl,form){
        this.fullNameForm = fullNameForm
        this.inputCSVEl = inputCSVEl
        this.ulExcursionEl = ulExcursionEl
        this.buttonEl = buttonEl;
        this.form = form
    }

    initialEvent(){
        // ostatnio jak mi pokazales przekazywanie eventu za pomoca funckji strzałkowej to przepisuja za kazdym razem bezmyslnie ta formulke "event => this.funkcja(event)". Sa sytuacje kiedy nie bedzie to pożądane?
        this.inputCSVEl.addEventListener('change', event => this.showOfferElements(event));
        this.ulExcursionEl.addEventListener('submit', event => this.setCart(event));
        this.buttonEl.addEventListener('click', event => this.deleteSummaryElement(event));
        this.form.addEventListener('submit', event => this.sendForm(event));
       
    }

    showOfferElements(){
        const checkIfValueIsCSVFile = new ValidationCSVFile(this.inputCSVEl)
        checkIfValueIsCSVFile.run();
        const run = new CSVFileReader(this.inputCSVEl)
        run.readFile();
    }

    setCart(event){
        event.preventDefault();
        const offerEl = event.target.parentNode
        const ammountOfAdults = offerEl.querySelector('input[name="adults"').value;
        const ammountOfChildrens = offerEl.querySelector('input[name="children"]').value;
        const checkIfValueIsANumber = new ValidationOffer(ammountOfAdults,ammountOfChildrens)
        checkIfValueIsANumber.run();
        const createSummaryEl = new SummaryElement(offerEl,ammountOfAdults,ammountOfChildrens)
        createSummaryEl.run();
    }

    deleteSummaryElement(event){
        this.summaryTotalPriceEl = event.target.parentElement.querySelector('.summay__total-price');
        this.orderTotalPriceEl = document.querySelector('.order__total-price-value')
        this.priceAfterDeduction = Number(this.orderTotalPriceEl.dataset.price) - Number(this.summaryTotalPriceEl.dataset.price)
        this.orderTotalPriceEl.dataset.price = this.priceAfterDeduction
        this.orderTotalPriceEl.innerText = this.priceAfterDeduction
        
        if(event.target.tagName == 'BUTTON'){
            event.target.parentElement.parentElement.remove()
        } 
    }
    sendForm(event){
        event.preventDefault();
        const sendOffer = new FormSender(this.form)
        sendOffer.run();
    }

}