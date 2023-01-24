import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    QueryDocumentSnapshot,
    setDoc,
    SnapshotOptions,
} from "firebase/firestore";
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";
import firebaseApp from "../config";

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
                sales: client.sales,
            };
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Client {
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
            const docRef = doc(this.collection(), client.id);
            await setDoc(docRef, client);
            return client;
        } else {
            const docRef = await addDoc(this.collection(), client);
            const doc = await getDoc(docRef);
            return doc.data();
        }
    }

    async delete(client: Client): Promise<void> {
        const docRef = doc(this.collection(), client.id);
        return deleteDoc(docRef);
    }

    async showAll(): Promise<Client[]> {
        const query = await getDocs(this.collection());
        return query.docs.map((doc) => doc.data());
    }

    private collection() {
        const db = getFirestore(firebaseApp);
        return collection(db, "clients").withConverter(this.#converter);
    }
}
