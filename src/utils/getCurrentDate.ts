
export const getCurrentDate = (): string =>{
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth().toString().padStart(2, '0');
  const day = currentDate.getDay().toString().padStart(2, '0');

  return `${day}.${month}.${year}`
}