export interface CartPresenter {
    add(id: number): void;

    remove(id: number): void;

    updateCartView(): void;
}
