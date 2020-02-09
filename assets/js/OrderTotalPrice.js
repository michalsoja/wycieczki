export default class OrderTotalPrice {
    constructor(totalPrice){
        this.orderPriceEl = document.querySelector('.order__total-price-value');
        this.totalPrice = totalPrice;
    }
    run(){
        this.kupa = Number(this.orderPriceEl.dataset.price) + Number(this.totalPrice);
        this.orderPriceEl.innerText = this.kupa
        this.orderPriceEl.dataset.price = this.kupa
    }
}