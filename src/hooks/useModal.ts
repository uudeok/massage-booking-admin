import { useState } from "react";

export const useModal = () => {
  const [open, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return { open, closeModal: closeModalHandler, openModal: openModalHandler };
};
