import { PaymentMethod } from "../../../../web-larek-frontend/src/types";

export interface OrderPresenter {
    submitOrder(email: string, phone: string): void;

    payment(method: PaymentMethod, address: string): void;

    onSuccess(id: number): void;
}
