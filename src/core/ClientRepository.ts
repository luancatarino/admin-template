import Client from "./Client";
import Sale from "./Sale";

export default interface ClientRepository {
    save(client: Client): Promise<Client>;
    saveSale(client: Client, sale: Sale):void;
    delete(client: Client): Promise<void>;
    showAll(): Promise<Client[]>;
}
