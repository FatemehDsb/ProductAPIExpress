export class ItemsModel {
    constructor(id, name, style ) {
            this.id=id;
            this.name=name;
            this.style= style;
    }
} 

export class DetailsModel extends ItemsModel{
    constructor(id, name, style, price, stock, rating){
        super(id, name, style)
        this.price=price;
        this.stock=stock;
        this.rating=rating;
        
    }
}