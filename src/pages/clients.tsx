import { useState } from "react";
import Button from "../components/template/Button";
import Form from "../components/template/Form";
import Layout from "../components/template/Layout";
import Table from "../components/template/Table";
import Client from "../core/Clients";

export default function Clients() {
    const [show, setShow] = useState<"table" | "form">("table");

    const clients = [
        new Client("C1", "Mercado Pinhal", 12445, 657, 123, "Parana", "Pinhal", "Centro", "Rua A", 10),
        new Client("C2", "Mercado Pinhal", 12445, 657, 123, "Parana", "Pinhal", "Centro", "Rua A", 10),
        new Client("C3", "Mercado Pinhal", 12445, 657, 123, "Parana", "Pinhal", "Centro", "Rua A", 10),
        new Client("C4", "Mercado Pinhal", 12445, 657, 123, "Parana", "Pinhal", "Centro", "Rua A", 10),
        new Client("C5", "Mercado Pinhal", 12445, 657, 123, "Parana", "Pinhal", "Centro", "Rua A", 10),
    ];

    const selectedClient = (client: Client) => {
        console.log(client.name);
    };

    const deleteClient = (client: Client) => {
        console.log(client.name);
    };

    const saveClient = (client: Client) => {
        console.log(client);
        setShow("table")
    };

    return (
        <Layout title="Clients" subtitle="See your clients">
            {show === "table" ? (
                <>
                    <Button onClick={() => setShow("form")} color="blue" className="mb-4">
                        Add Client
                    </Button>
                    <Table clients={clients} selectedClient={selectedClient}></Table>
                </>
            ) : (
                <Form client={clients[0]} changed={saveClient} canceled={() => setShow("table")} />
            )}
        </Layout>
    );
}
