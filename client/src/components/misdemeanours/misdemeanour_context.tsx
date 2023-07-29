import { createContext, useContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";

type MisdemeanourContextType = {
  misdemeanours: Misdemeanour[];
  error: Error | null;
  filterMisdemeanour: string | null;
  setFilterMisdemeanour: (misdemeanour: string | null) => void;
};

export const MisdemeanoursContext = createContext<
  MisdemeanourContextType | undefined
>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useMisdemeanoursContext() {
  const context = useContext(MisdemeanoursContext);
  if (context === undefined) {
    throw new Error(
      "useMisdemeanoursContext must be used within a MisdemeanoursProvider"
    );
  }
  return context;
}
