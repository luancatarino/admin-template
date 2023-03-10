import Sale from "./Sale";

export default class Client {
    #id: string;
    #name: string;
    #taxId: number;
    #ie: number;
    #zipCode: number;
    #state: string;
    #city: string;
    #district: string;
    #street: string;
    #number: number;
    #sales?: Sale[];

    constructor(
        name: string,
        taxId: number,
        ie: number,
        zipCode: number,
        state: string,
        city: string,
        district: string,
        street: string,
        number: number,
        sales?: Sale[],
        id: string = null
    ) {
        this.#name = name;
        this.#taxId = taxId;
        this.#id = id;
        this.#ie = ie;
        this.#zipCode = zipCode;
        this.#state = state;
        this.#city = city;
        this.#district = district;
        this.#street = street;
        this.#number = number;
        this.#sales = sales;
    }

    static empty() {
        return new Client("", 0, 0, 0, "", "", "", "", 0, []);
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get taxId() {
        return this.#taxId;
    }

    get ie() {
        return this.#ie;
    }

    get zipCode() {
        return this.#zipCode;
    }

    get state() {
        return this.#state;
    }

    get city() {
        return this.#city;
    }

    get district() {
        return this.#district;
    }

    get street() {
        return this.#street;
    }

    get number() {
        return this.#number;
    }

    get sales() {
        return this.#sales;
    }
}
