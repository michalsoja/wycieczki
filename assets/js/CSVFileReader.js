import CSVFileSpliter from './CSVFileSpliter.js'

export default class CSVFileReader{
    constructor(inputCSV){
        this.inputCSV = inputCSV
    }
    readFile(){
        const reader = new FileReader();
        const csv = this.inputCSV.files[0];
        reader.onload = function(readerEvent){
            this.csvFile = readerEvent.target.result;
            const run = new CSVFileSpliter(this.csvFile);
            run.splitFile();
        }
        reader.readAsText(csv)
    }
}