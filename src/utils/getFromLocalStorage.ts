
export const getFromLocalStorage = (getItemName: string) =>{
    const storedNotes = localStorage.getItem(getItemName)
    if (storedNotes !== null){
      const parsedNotes = JSON.parse(storedNotes)
      return parsedNotes
    }
    return []
  }