export default class ValidationOrder {
    constructor(form) {
        this.nameInput = form.elements.name
        this.emailInput = form.elements.email
        this.ulSummaryEl = document.querySelector('.panel__summary');
    }
    run() {
        if (this.didYouAddOffer() && this.isEmailInputValid() && this.isEmailInputValid()) {
            return true
        }

        return false

    }

    isNameInputValid() {
        const pattern = new RegExp("[[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]]")
        if (pattern.test(this.nameInput.value)) {
            return true
        }
        return false

    }

    isEmailInputValid() {
        if (this.emailInput.value.includes('@')) {
            return true
        }
        return false

    }


    didYouAddOffer() {
        if (this.ulSummaryEl.children.length > 1) {
            return true
        }
        return false

    }
}