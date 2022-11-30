import { db } from "$lib/firebase/app";
import { doc, getDoc, setDoc } from "firebase/firestore";

const checkName = async (name: string) => {
  const docRef = doc(db, "names", name);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};

const addName = (name: string) => {
  const docRef = doc(db, "names", name);
  return setDoc(docRef, {});
};
