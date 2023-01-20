export default class Client {
    #id: string;
    #name: string;
    #taxId?: number;
    #ie?: number;
    #zipCode?: number;
    #state: string;
    #city?: string;
    #district?: string;
    #street?: string;
    #number?: number;

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
        id: string = null
    ) {
        this.#id = id;
        this.#name = name;
        this.#taxId = taxId;
        this.#ie = ie;
        this.#zipCode = zipCode;
        this.#state = state;
        this.#city = city;
        this.#district = district;
        this.#street = street;
        this.#number = number;
    }

    static empty() {
        return new Client("", 0, 0, 0, "", "", "", "", 0);
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
}
