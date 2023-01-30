import Button from "../components/template/Button";
import Form from "../components/template/Form";
import FormSale from "../components/template/FormSale";
import Layout from "../components/template/Layout";
import Table from "../components/template/Table";
import TableClientSales from "../components/template/TableClientSales";
import useAppData from "../data/hook/useAppData";
import useClients from "../hooks/useClients";

export default function Clients() {
    const { saveClient, newClient, editClient, editSale, selectedClient, newSale, saveNewSale } = useClients();
    const { show, setShow, client, clients, sale} = useAppData();

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
                <>
                    <Button  onClick={newSale}className="mb-4">
                        Add Sale
                    </Button>
                    <TableClientSales client={client} editSale={editSale} />
                </>
            ) : show === "form" ?(
                <Form client={client} changed={saveClient} canceled={() => setShow("table")} />
            ) : (
                <FormSale client={client} sale={sale} changed={saveNewSale} canceled={() => setShow("tableSales")} />
            )}
        </Layout>
    );
}
