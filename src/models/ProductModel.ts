import { Product } from "../../../../web-larek-frontend/src/types";

export interface ProductModel {
    getProductById(id: number): Promise<Product>;
}
