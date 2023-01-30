export default class Sale {
    #id: string;
    #date: string;
    #quantity: number;
    #unit: string;
    #value: number;
    #bonus: number;
    #total: number;

    constructor(date: string, quantity: number, unit: string, value: number, bonus: number, total: number, id: string = null) {
        this.#id = id;
        this.#date = date;
        this.#quantity = quantity;
        this.#unit = unit;
        this.#value = value;
        this.#bonus = bonus;
        this.#total = total;
    }

    static empty() {
        return new Sale("", 0, "", 0, 0, 0);
    }

    get id() {
        return this.#id;
    }

    get date() {
        return this.#date;
    }
    get quantity() {
        return this.#quantity;
    }

    get unit() {
        return this.#unit;
    }

    get value() {
        return this.#value;
    }

    get bonus() {
        return this.#bonus;
    }

    get total() {
        return this.#total;
    }
}
