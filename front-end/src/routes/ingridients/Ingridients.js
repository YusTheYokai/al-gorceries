import { OverviewPage } from "../../OverviewPage";
import { AddIngridientDialog } from "./AddIngridientDialog";
import { Ingridient } from "./Ingridient";

export const Ingridients = () => {
    const columns = ["Name"];

    return <OverviewPage headline="Zutaten" entityApiEndpoint="ingridients" columns={columns} entitiyComponent={<Ingridient />} addDialog={<AddIngridientDialog />} addDialogTitle={"Zutat hinzufügen"} />;
}