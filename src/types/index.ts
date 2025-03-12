import { ApiListResponse } from '../components/base/api';

/**
 * Модель продукта
 */
export interface IProduct {
    /**
    * ID товара
    */
	id: string;

    /**
    * Описание товара
    */
	description: string;

    /**
    * Изображение товара
    */
	image: string;

    /**
    * Название товара
    */
	title: string;

    /**
    * Категория товара
    */
	category: string;

    /**
    * Цена товара
    */
	price: number | null;
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
export type TPaymentMethod = 'cash' | 'card';

/**
 * Модель заказа
 */
export interface IOrder {
    /**
    * Список товаров в корзине
    */
	items: IProduct[];

    /**
    * Способ оплаты
    */
	payment: TPaymentMethod;

    /**
    * Адрес покупателя
    */
	address: string;

    /**
    * E-mail покупателя
    */
	email: string;

    /**
    * Телефон покупателя
    */
	phone: string;
}

/**
 * Заказ
 */
export type TOrderInvoice = Omit<IOrder, 'items'> & {
	items: string[];
	total: number;
};

/**
 * Этап заказа
 */
export type TOrderStep = 'receiving' | 'contacts';
