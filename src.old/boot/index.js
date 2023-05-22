import { getFirestore } from "firebase/firestore";

import firebaseApp from './firebase';

export let firestore;

export const initializeServices = () => {
    firestore = getFirestore(firebaseApp);
};

