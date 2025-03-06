import { CartElement } from "../../../../web-larek-frontend/src/types";

export interface CartModel {
    getElements(): CartElement[];
}
