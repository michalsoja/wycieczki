import OrderTotalPrice from "./OrderTotalPrice.js";

export default class SummaryTotalPrice {
    constructor(ammountOfAdults,ammountOfChildrens,priceAdults,priceChildrens,clonedSummaryElement){
        this.ammountOfAdults = ammountOfAdults
        this.ammountOfChildrens = ammountOfChildrens
        this.priceAdults = priceAdults
        this.priceChildrens = priceChildrens
        this.summaryPriceEl = clonedSummaryElement.querySelector('.summay__total-price');
    }

    run(){
        this.totalPrice = (this.ammountOfAdults * this.priceAdults) + (this.ammountOfChildrens * this.priceChildrens)
        this.summaryPriceEl.dataset.price = this.totalPrice
        this.summaryPriceEl.innerText = `${this.totalPrice}PLN`
        const addSummaryPrices = new OrderTotalPrice(this.totalPrice);
        addSummaryPrices.run();
    }
}