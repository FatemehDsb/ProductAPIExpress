export class ItemsModel {
    constructor(id, name, style , price, stock, description, image, rating, productType) {

        if (!id || !name || !style || !price || !stock || !image || !rating || !productType) {
            throw new Error("Missing required properties");
        }
            this.id=id;
            this.name=name;
            this.style= style;
            this.price= price;
            this.stock=stock;
            this.description=description;
            this.image=image;
            this.rating= rating;
            this.productType= productType

    }
} 

