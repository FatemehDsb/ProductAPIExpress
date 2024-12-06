

export interface IProduct {
    id: number,
    name: string,
    style: string,
    price: number,
    stock:number,
    image: string,
    rating: number,
    
    productType: "decoration" | "gift"
}
   
