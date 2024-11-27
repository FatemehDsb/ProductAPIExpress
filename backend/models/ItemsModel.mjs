export class ItemsModel {
    constructor(id, name, theme ) {
            this.id=id;
            this.name=name;
            this.theme= theme;
    }
} 

export class DetailsModel extends ItemsModel{
    constructor(id, name, theme, location, date, price){
        super(id, name, theme)
        this.location=location;
        this.date=date;
        this.price=price;
        
    }
}