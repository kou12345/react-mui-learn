import { useState } from "react";

export const useDensity = () => {
  const [dense, setDense] = useState(false);

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return { dense, handleChangeDense };
};
