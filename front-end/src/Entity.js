import { createContext, useContext, useState } from "react";
import { BoxArrowUpRight, PencilFill, TrashFill } from "react-bootstrap-icons";
import { deleteEntityAndGetEntities } from "./ApiUtils";
import { TableContentContext } from "./OverviewPage";
import { EntityContext } from "./TableContent";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

export const EditDialogContext = createContext();

export const Entity = ({getColumns, hasDetailPage}) => {
    const {entityApiEndpoint, setEntities, editDialog} = useContext(TableContentContext);
    const entity = useContext(EntityContext);

    const [showEditDialog, setShowEditDialog] = useState(false);

    const openEditDialog = () => {
        setShowEditDialog(true);
    }

    const closeEditDialog = () => {
        setShowEditDialog(false);
    }

    const context = {
        show: showEditDialog,
        close: closeEditDialog,
    }

    return (
        <>
            <tr key={entity._id}>
                {
                    getColumns(entity).map(column => {
                        return <td key={v4()}>{column}</td>;
                    })
                }
                <td>
                    { hasDetailPage && <Link to={entity._id}><BoxArrowUpRight color="white" /></Link> }
                    <button onClick={openEditDialog} className="icon-button">
                        <PencilFill color="white" />
                    </button>
                    <button onClick={() => deleteEntityAndGetEntities(entityApiEndpoint, entity._id, setEntities)} className="icon-button">
                        <TrashFill color="white" />
                    </button>
                </td>
            </tr>
            <EditDialogContext.Provider value={context}>
                {editDialog}
            </EditDialogContext.Provider>
        </>
    );
}