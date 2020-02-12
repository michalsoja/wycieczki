export default class ValidationCSVFile {
    constructor(inputCSVEl) {
        this.inputCSVEl = inputCSVEl
    }

    run() {
        const inputCSVValue = this.inputCSVEl.value
        const pattern = new RegExp("^.+\.(xlsx|xls|csv)$")
        return pattern.test(inputCSVValue)
    }
}