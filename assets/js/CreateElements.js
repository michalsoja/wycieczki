export default class CreateElements{
    constructor(splitedFile){
        // bardzo duzo linijek. Moze lepsze wyjscie z pobraniem elementow?
        this.ulEl = document.querySelector('.panel__excurions');
        this.splitedFile = splitedFile
        this.liProtoElement = document.querySelector('.excurions__item');
        this.clonedLiEl = this.liProtoElement.cloneNode(true);
        this.titleEl = this.clonedLiEl.querySelector('.excursions__title');
        this.descrtiptionEl = this.clonedLiEl.querySelector('.excursions__description');
        this.priceAdultEl = this.clonedLiEl.querySelector('.priceForAdult');
        this.priceKidEl = this.clonedLiEl.querySelector('.priceForChild')
        const [index,place,descrtiption,priceAdult,priceKid] = this.splitedFile
        this.place = place;
        this.descrtiption = descrtiption;
        this.priceAdult = priceAdult;
        this.priceKid = priceKid;
    }

    createOffer(){
        this.titleEl.innerText = this.place
        this.descrtiptionEl.innerText = this.descrtiption
        this.priceAdultEl.innerText = this.priceAdult
        this.priceKidEl.innerText = this.priceKid
        this.ulEl.appendChild(this.clonedLiEl)
        this.clonedLiEl.classList.remove('excurions__item--prototype');
    }
    
}