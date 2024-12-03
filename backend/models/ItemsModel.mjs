export class ItemsModel {
    constructor(id, name, style , price, stock, description, image, rating) {

        if (!id || !name || !style || !price || !stock || !image || !rating) {
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

    }
} 

// export class DetailsModel extends ItemsModel{
//     constructor(id, name, style, price, stock,image, rating,description ){
//         super(id, name, style, price, stock,image, rating)
    
//         this.description=description
        
//     }
// }