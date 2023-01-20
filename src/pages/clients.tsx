import { useEffect } from "react";
import Button from "../components/template/Button";
import Form from "../components/template/Form";
import Layout from "../components/template/Layout";
import Table from "../components/template/Table";
import ClientRepository from "../core/ClientRepository";
import Client from "../core/Clients";
import useAppData from "../data/hook/useAppData";
import ClientCollection from "../firebase/database/ClientCollection";

export default function Clients() {
    const repo: ClientRepository = new ClientCollection();

    const { show, setShow, client, setClient, clients, setClients } = useAppData();

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

    return (
        <Layout title="Clients" subtitle="See your clients">
            {show === "table" ? (
                <>
                    <Button onClick={newClient} color="blue" className="mb-4">
                        Add Client
                    </Button>
                    <Table clients={clients} selectedClient={selectedClient}></Table>
                </>
            ) : (
                <Form client={client} changed={saveClient} canceled={() => setShow("table")} />
            )}
        </Layout>
    );
}
