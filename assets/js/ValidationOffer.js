export default class ValidationOffer {
    constructor(ammountOfAdults, ammountOfChildrens) {
        this.ammountOfAdults = ammountOfAdults
        this.ammountOfChildrens = ammountOfChildrens;
    }
    run() {
        if (this.isAdultValueANumber() && this.isChildenValueANumber() && this.isSumAboveZero()) {
            if (this.ammountOfAdults)
                return true
        }
        return false
    }

    isChildenValueANumber() {
        if (isNaN(this.ammountOfChildrens) || this.ammountOfChildrens === '') {
            return false
        }

        return true


    }
    isAdultValueANumber() {
        if (isNaN(this.ammountOfAdults) || this.ammountOfAdults === '') {
            return false
        }
        return true
    }
    isSumAboveZero() {
        return this.ammountOfAdults + this.ammountOfChildrens != 0
    }
}










