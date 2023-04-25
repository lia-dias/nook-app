import { getCollectionSnapshot } from './../../services/firestore';

/* const missions = [{
    name: "Angling for Perfection",
    description: "Description"
},{
    name: "Mission 2",
    description: "Description"
},{
    name: "Mission 3",
    description: "Description"
},{
    name: "Mission 2",
    description: "Description"
},{
    name: "Mission 3",
    description: "Description"
}]; */

class MissionModel  {
    async getMissionByBook( bookId ) {
        const documents = await getCollectionSnapshot("books", bookId, "missions");
        const rawData = [];
        documents.forEach((document) => {
            rawData.push(document.data());
        });
        return rawData;
    }
}

export default (() => new MissionModel())();