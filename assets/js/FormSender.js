import ValidationOrder from "./ValidationOrder.js"

export default class FormSender{
    constructor(form){
        this.form = form
        this.emailInput = form.elements.email;
    }
    run(){
        const checkInputs = new ValidationOrder(this.form)
        checkInputs.run();
        if(checkInputs.run() == false){
            alert('Proszę podać poprawnie imię i email')
            return
        }
        
        alert(`Potwierdzenia zamówienia zostało wysłane na maila:${this.emailInput.value}`)
    }
}