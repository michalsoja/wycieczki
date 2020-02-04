export default class ValidationOffer {
    constructor(ammountOfAdults, ammountOfChildrens) {
        this.ammountOfAdults = ammountOfAdults
        this.ammountOfChildrens = ammountOfChildrens;
    }
    run() {
        if(this.isAdultValueANumber() && this.isChildenValueANumber()){
            if(this.ammountOfAdults )
            return true
            
        }
        return false
    }

    isChildenValueANumber() {
        if (isNaN(this.ammountOfChildrens) || this.ammountOfChildrens === '') {
            alert('Proszę uzupełnić pole "Dziecko"')
            return false
        }
        console.log('dobrze')
        return true


    }
    isAdultValueANumber() {
        if (isNaN(this.ammountOfAdults) || this.ammountOfAdults === '') {
            alert('Proszę uzupełnić pole "Dorosły"')
            return false
        }
        console.log('dobrze')
        return true
    }
}








