export default class OrderTotalPrice {
    constructor(totalPrice){
        this.orderPriceEl = document.querySelector('.order__total-price-value');
        this.totalPrice = totalPrice;
    }
    run(){
        this.price = Number(this.orderPriceEl.dataset.price) + Number(this.totalPrice);
        this.orderPriceEl.innerText = this.price
        this.orderPriceEl.dataset.price = this.price
    }
}