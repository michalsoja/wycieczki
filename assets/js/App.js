import ReadCSVFile from './ReadCSVFile.js'

export default class App{
    constructor(inputCSV,fullNameForm){
        this.fullNameForm = fullNameForm
        this.inputCSV = inputCSV
    }

    initialEvent(){
        this.inputCSV.addEventListener('change', event => this.showOfferElements(event))
    }

    showOfferElements(){
        const run = new ReadCSVFile(this.inputCSV)
        run.readFile();
    }
}