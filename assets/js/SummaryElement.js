import SummaryTotalPrice from "./SummaryTotalPrice.js";

export default class SummaryElement {
    constructor(offerEl,ammountOfAdults,ammountOfChildrens) {
        this.ulEl = document.querySelector('.panel__summary')
        this.summaryElProto = this.ulEl.querySelector('.summary__item--prototype')
        this.clonedSummaryEl = this.summaryElProto.cloneNode(true);
        this.titleEl = this.clonedSummaryEl.querySelector('.summary__name');
        this.pricesEl = this.clonedSummaryEl.querySelector('.summary__prices');
        this.offerEl = offerEl
        this.title = this.offerEl.querySelector('.excursions__title').innerText
        this.priceAdult = this.offerEl.querySelector('.priceForAdult').innerText
        this.priceChild = this.offerEl.querySelector('.priceForChild').innerText
        this.ammountOfAdults = ammountOfAdults
        this.ammountOfChildrens = ammountOfChildrens
    }

    run() {
       this.titleEl.innerText = this.title
       const calcSummaryPrice = new SummaryTotalPrice(this.ammountOfAdults,this.ammountOfChildrens,this.priceAdult,this.priceChild,this.clonedSummaryEl)
       calcSummaryPrice.run();
       this.pricesEl.innerText = `dorośli: ${this.ammountOfAdults} x ${this.priceAdult}PLN, dzieci: ${this.ammountOfChildrens} x ${this.priceChild}PLN`
       this.ulEl.appendChild(this.clonedSummaryEl);
       this.clonedSummaryEl.classList.remove('summary__item--prototype');
       

    }

}