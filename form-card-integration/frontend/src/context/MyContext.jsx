import {createContext, useState} from 'react'

export const MyContext = createContext();

export const ContextProvider = ({children}) => {
  const [isUpdatedCard, setIsUpdatedCard] = useState({});
  console.log(isUpdatedCard);

  return (
    <MyContext.Provider value={{isUpdatedCard, setIsUpdatedCard}}>{children}</MyContext.Provider>
  )
}