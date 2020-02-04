export default class ValidationCSVFile {
    constructor(inputCSVEl) {
        this.inputCSVEl = inputCSVEl
    }

    run() {
        const inputCSVValue = this.inputCSVEl.value
        const pattern = new RegExp("^.+\.(xlsx|xls|csv)$")
        // WAŻNE. Nie działa mi tutaj walidacja. Pomimo tego, że uzylem tutaj return, dalej tworzą się elementy. 
        if (pattern.test(inputCSVValue) == false) {
            alert('Proszę wybrać plik o formacie .csv')
            return
        }
    }
}