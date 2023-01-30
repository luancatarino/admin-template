import { useEffect } from "react";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import Sale from "../core/Sale";
import useAppData from "../data/hook/useAppData";
import ClientCollection from "../firebase/database/ClientCollection";


export default function useClients() {
    const repo: ClientRepository = new ClientCollection();


    const { setShow, setClient, setClients, setSale, setHeaderName} = useAppData();

    const showAll = () => {
        repo.showAll().then((clients) => {
            setClients(clients);
            setShow("table");
        });
    };

    useEffect(showAll, []);

    const selectedClient = (client: Client) => {
        setClient(client);
        setHeaderName("selectedClient")
        setShow("tableSales");
    };

    const editClient = (client: Client) => {
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

    const newSale = async () => {      
        setSale(Sale.empty())
        setShow("formSale");
        setHeaderName("selectedClient")
        
    };

    const editSale = (sale: Sale) => {
        setSale(sale)
        setShow("formSale");
   };

   const saveNewSale= async (client: Client, sale: any) => {
        
        await repo.saveSale(client, sale)
};

    return {
        saveClient,
        newClient,
        deleteClient,
        editClient,
        selectedClient,
        editSale,
        newSale,
        saveNewSale
    };
}
