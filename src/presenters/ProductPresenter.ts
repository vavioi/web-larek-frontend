export interface ProductPresenter {
    getProductInfo(id: number): void;

    loadProductView(): void;
}
