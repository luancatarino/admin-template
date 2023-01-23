import Button from "../components/template/Button";
import Form from "../components/template/Form";
import Layout from "../components/template/Layout";
import Table from "../components/template/Table";
import TableClientSales from "../components/template/TableClientSales";
import useAppData from "../data/hook/useAppData";
import useClients from "../hooks/useClients";

export default function Clients() {
    const { saveClient, newClient, editClient, editSale , selectedClient} = useClients();
    const { show, setShow, client, clients, sale } = useAppData();

    return (
        <Layout title="Clients" subtitle="See your clients">
            {show === "table" ? (
                <>
                    <Button onClick={newClient} className="mb-4">
                        Add Client
                    </Button>
                    <Table clients={clients} editClient={editClient} selectedClient={selectedClient}></Table>
                </>
            ) : show === "tableSales" ? (
                <TableClientSales client={client} editSale={editSale} />
            ) : (
                <Form client={client} changed={saveClient} canceled={() => setShow("table")} />
            )}
        </Layout>
    );
}
