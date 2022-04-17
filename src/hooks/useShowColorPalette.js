import { useState } from "react";

const useShowColorPalette = () => {
  const [displayColorPalette, setDisplayColorPalette] = useState(false);

  return { displayColorPalette, setDisplayColorPalette };
};

export { useShowColorPalette };
