export class ItemsModel {
    constructor(id, name, style , price, rating) {
            this.id=id;
            this.name=name;
            this.style= style;
            this.price= price;
            this.rating= rating;

    }
} 

export class DetailsModel extends ItemsModel{
    constructor(id, name, style, price, stock, rating, description){
        super(id, name, style, price, rating)
       
        this.stock=stock;
        this.description=description;
        
    }
}