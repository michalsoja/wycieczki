import ValidationOrder from "./ValidationOrder.js"

export default class FormSender{
    constructor(form){
        this.form = form
        this.emailInput = form.elements.email;
    }
    run(){
        const checkInputs = new ValidationOrder(this.form)
        checkInputs.run();
        alert(`Potwierdzenia zamówienia zostało wysłane na maila:${this.emailInput.value}`)
    }
}