import { collection, getDocs } from "firebase/firestore"; 
import { firestore } from "./../boot";

export async function getCollectionSnapshot( ...path ) {
    const collectionReference = collection(firestore, path.join("/"));
    return getDocs(collectionReference);
};