/**
 * Абстрактный класс представления
 */
export default class AbstractView {
    constructor() {
      if (new.target === AbstractView) {
        throw new Error('Can\'t instantiate AbstractView, only concrete one.');
      }
    }
  
    /**
     * Геттер для получения элемента
     * @returns {HTMLElement} Элемент представления
     */
    get element() {
      throw new Error('Abstract method not implemented: get element');
    }
  
    /**
     * Геттер для получения разметки элемента
     * @abstract
     * @returns {string} Разметка элемента в виде строки
     */
    get template() {
      throw new Error('Abstract method not implemented: get template');
    }
  }
  