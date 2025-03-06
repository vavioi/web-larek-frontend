import { PaymentMethod } from "../../../../web-larek-frontend/src/types";

export interface OrderModel {
    setAddress(address: string): void;

    setPersonalInfo(email: string, phone: string): void;

    setPaymentMethod(method: PaymentMethod): void;
}
