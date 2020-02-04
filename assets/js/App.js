import ReadCSVFile from './ReadCSVFile.js'
import ValidationCSVFile from './ValidationCSVFile.js'
import ValidationOffer from './ValidationOffer.js'
import SummaryElement from './SummaryElement.js'

export default class App{
    constructor(inputCSVEl,fullNameForm,ulExcursionEl,ulSummaryEl){
        this.fullNameForm = fullNameForm
        this.inputCSVEl = inputCSVEl
        this.ulExcursionEl = ulExcursionEl
        this.ulSummaryEl = ulSummaryEl;
    }

    initialEvent(){
        // ostatnio jak mi pokazales przekazywanie eventu za pomoca funckji strzałkowej to przepisuja za kazdym razem bezmyslnie ta formulke "event => this.funkcja(event)". Sa sytuacje kiedy nie bedzie to pożądane?
        this.inputCSVEl.addEventListener('change', event => this.showOfferElements(event))
        this.ulExcursionEl.addEventListener('submit', event => this.setCart(event))
        this.ulSummaryEl.addEventListener('click', event => this.deleteSummaryElement(event))
       
    }

    showOfferElements(){
        const checkIfValueIsCSVFile = new ValidationCSVFile(this.inputCSVEl)
        checkIfValueIsCSVFile.run();
        const run = new ReadCSVFile(this.inputCSVEl)
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
        //spytaj czemu nie działał preventDefault gdy dales nasluchiwanie na przycisk od usuwania elementu, pomimo tego ze byl w DOM od załadowania strony
        event.preventDefault();
        console.log(this.ulSummaryEl)
        console.log(event.target)
    }
}