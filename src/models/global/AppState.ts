import { IProduct, IOrder } from '../../types';


export interface IAppState {
	preview: IProduct;
	basket: Set<IProduct>;
	products: IProduct[];
	order: IOrder;
}

export enum AppStateEvents {
	// Событие возникающее при изменении списка товаров каталога
	PRODUCTS_UPDATE = 'products:update',
	// Событие возникающее при изменении preview
	PREVIEW_UPDATE = 'preview:update',
	// Событие возникающее при инициализации корзины
	BASKET_INIT = 'basket:init',
	// Событие возникающее при изменении товаров в корзине
	BASKET_UPDATE = 'basket:update',
	// Событие возникающее при сбросе корзины
	BASKET_RESET = 'basket:reset',
	// Событие возникающее при изменении этапа заказа
	ORDER_STEP = 'order:step',
	// Событие возникающее при изменении поля заказа
	ORDER_UPDATE = 'order:update',
	// Событие возникающее при сбросе заказа
	ORDER_RESET = 'order:reset',
}
