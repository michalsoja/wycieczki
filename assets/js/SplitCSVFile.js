import CreateElements from './CreateElements.js'

export default class SplitCSVFile{
    constructor(csvFile){
        this.csvFile = csvFile
    }
    splitFile(){
        // jest lepszy sposób podzielenia na kolumny?
        this.splitFileToRows = this.csvFile.split(/[\r\n]+/gm)
        this.splitFileToRows.forEach(element => {
            const column = element.split(/,"|"/)
            this.splitedFile = column.filter(name => {
                return name.length > 0
            })
            const run = new CreateElements(this.splitedFile);
            run.createOffer();
        })
        
    }
}