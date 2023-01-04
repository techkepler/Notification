import { createContext, useContext, useState } from "react";

export const ContextCreator = createContext();

const ContextProvider = ({ children }) => {
  const [bookedId, setBookedId] = useState("");
  const [pdfData, setPdfData] = useState("");
  return (
    <ContextCreator.Provider
      value={{ bookedId, setBookedId, pdfData, setPdfData }}
    >
      {children}
    </ContextCreator.Provider>
  );
};

export const StateProvider = () => {
  return useContext(ContextCreator);
};

export default ContextProvider;
