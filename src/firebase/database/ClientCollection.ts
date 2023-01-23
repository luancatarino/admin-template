import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";
import firebase from "../config";

export default class ClientCollection implements ClientRepository {
    #converter = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                taxId: client.taxId,
                ie: client.ie,
                zipCode: client.zipCode,
                state: client.state,
                city: client.city,
                district: client.district,
                street: client.street,
                number: client.number,
                sales: client.sales
            };
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const data = snapshot.data(options);
            return new Client(
                data.name,
                data.taxId,
                data.ie,
                data.zipCode,
                data.state,
                data.city,
                data.district,
                data.street,
                data.number,
                data.sales,
                snapshot.id
            );
        },
    };

    async save(client: Client): Promise<Client> {
        if (client?.id) {
            await this.collection().doc(client.id).set(client);
            return client;
        } else {
            const docRef = await this.collection().add(client);
            const doc = await docRef.get();
            return doc.data();
        }
    }

    async delete(client: Client): Promise<void> {
        return this.collection().doc(client.id).delete();
    }

    async showAll(): Promise<Client[]> {
        const query = await this.collection().get();
        return query.docs.map((doc) => doc.data()) ?? [];
    }

    private collection() {
        return firebase.firestore().collection("clients").withConverter(this.#converter);
    }
}
