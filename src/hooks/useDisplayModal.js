import { useState } from "react";

const useDisplayModal = () => {
  const [showModal, setShowModal] = useState(false);
  return { showModal, setShowModal };
};

export { useDisplayModal };
