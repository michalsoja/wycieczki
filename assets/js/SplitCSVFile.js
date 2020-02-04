import CreateElements from './CreateElements.js'

export default class SplitCSVFile{
    constructor(csvFile){
        this.csvFile = csvFile
    }
    splitFile(){
        // jest lepszy sposób podzielenia na kolumny?
        this.splitFileToRows = this.csvFile.split(/[\r\n]+/gm)
        this.splitFileToRows.forEach(element => {
            const splitFileToColumns = element.split(/,"|"/)
            this.splitedFile = splitFileToColumns.filter(name => {
                return name.length > 0
            })
            // troszkę nie podoba mi się, że nazwa klasy wskazuje ze rozdzielam tutaj pliki,a jednoczesnie wpisałem tutaj klase która tworzy elementy. Moze to troszke narobic zamieszania w kodzie. Co o tym myslisz?
            const run = new CreateElements(this.splitedFile);
            run.createOffer();
        })
        
    }
}