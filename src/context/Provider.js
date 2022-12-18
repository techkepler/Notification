import { createContext, useContext, useState } from "react";

export const ContextCreator = createContext();

const ContextProvider = ({ children }) => {
  const [bookedId, setBookedId] = useState("");
  return (
    <ContextCreator.Provider value={{ bookedId, setBookedId }}>
      {children}
    </ContextCreator.Provider>
  );
};

export const StateProvider = () => {
  return useContext(ContextCreator);
};

export default ContextProvider;
