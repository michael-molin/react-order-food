export interface ProductInterface {
    id: string,
    image: string,
    name: string,
    price : number,
    description : string
}
export interface ProductListInterface {
    id: string,
    image: string,
    title: string,
    list: ProductInterface[]
}
