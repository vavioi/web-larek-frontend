import { ApiListResponse } from '../components/base/api';

/**
 * Модель продукта
 */
export interface Product {
    /**
    * ID товара
    */
    id: number;

    /**
    * Название товара
    */
    name: string;

    /**
    * Описание товара
    */
    description: string;

    /**
    * Изображение товара
    */
    image: string;

    /**
    * Цена товара
    */
    price: number;
}

/**
 * Модель элемента корзины
 */
export interface CartElement {
    /**
    * ID товара
    */
    id: number;

    /**
    * Количество товара в корзине
    */
    amount: number;
}

/**
 * Методы оплаты
 */
export type PaymentMethod = 'online' | 'uponReceipt';

/**
 * Модель заказа
 */
export interface Order {
    /**
    * ID заказа
    */
    id: number;

    /**
    * Список товаров в корзине
    */
    items: CartElement[];

    /**
    * Метод оплаты
    */
    paymentMethod: PaymentMethod;

    /**
    * Телефон покупателя
    */
    phone: string;

    /**
    * E-mail покупателя
    */
    email: string;

    /**
    * Адрес покупателя
    */
    address: string;
}

/**
 * Модель ответа API на запрос
 */
export interface Response<T> {
    /**
    * Статус запроса
    */
    status: boolean;

    /**
    * Сообщение в ответе
    */
    message?: string;

    /**
    * Данные с сервера
    */
    data: T;
}