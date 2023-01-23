import Button from "../components/template/Button";
import Form from "../components/template/Form";
import Layout from "../components/template/Layout";
import Table from "../components/template/Table";
import useAppData from "../data/hook/useAppData";
import useClients from "../hooks/useClients";

export default function Clients() {
    const { saveClient, newClient, selectedClient,} = useClients();
    const { show, setShow, client, clients } = useAppData();

    return (
        <Layout title="Clients" subtitle="See your clients">
            {show === "table" ? (
                <>
                    <Button onClick={newClient} className="mb-4">
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
