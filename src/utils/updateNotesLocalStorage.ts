import { ICard } from "../types/types";

export const updateNotesLocalStorage = (notes: ICard[]): void =>{
  localStorage.setItem("notes", JSON.stringify(notes))
}