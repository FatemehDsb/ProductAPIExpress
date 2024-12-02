export class ItemsModel {
    constructor(id, name, style , price, stock, image, rating) {
            this.id=id;
            this.name=name;
            this.style= style;
            this.price= price;
            this.stock=stock;
            this.image=image;
            this.rating= rating;

    }
} 

export class DetailsModel extends ItemsModel{
    constructor(id, name, style, price, stock, rating,description, image ){
        super(id, name, style, price, rating, image)
    
        this.description=description
        
    }
}