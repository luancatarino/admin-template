import { useEffect } from "react";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import useAppData from "../data/hook/useAppData";
import ClientCollection from "../firebase/database/ClientCollection";

export default function useClients() {
    const repo: ClientRepository = new ClientCollection();

    const { setShow, setClient, setClients } = useAppData();

    const showAll = () => {
        repo.showAll().then((clients) => {
            setClients(clients);
            setShow("table");
        });
    };

    useEffect(showAll, []);

    const selectedClient = (client: Client) => {
        setClient(client);
        setShow("form");
    };

    const deleteClient = async (client: Client) => {
        await repo.delete(client);
        showAll();
    };

    const saveClient = async (client: Client) => {
        await repo.save(client);
        showAll();
    };

    const newClient = () => {
        setClient(Client.empty());
        setShow("form");
    };

    return {
        saveClient,
        newClient,
        deleteClient,
        selectedClient,
    };
}
