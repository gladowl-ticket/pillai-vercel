import React, { createContext, useContext, useMemo, useState } from "react";
 
const ModalContext = createContext(null);
 
export const ModalProvider = ({ children }) => {
const [isOpen, setIsOpen] = useState(false);
 
const value = useMemo(
() => ({
isOpen,
openModal: () => setIsOpen(true),
closeModal: () => setIsOpen(false),
}),
[isOpen]
);
 
return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
 
export const useModal = () => {
const context = useContext(ModalContext);
if (!context) {
throw new Error("useModal must be used within ModalProvider");
}
return context;
};