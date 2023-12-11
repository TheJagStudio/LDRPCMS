import { atom } from "jotai";

export const sideBarAtom = atom(true);

export const lastMessageAtom = atom("");
export const userInfo = atom({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    role: "",
    gender: "",
});
