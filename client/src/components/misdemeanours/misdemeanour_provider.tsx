import { useState } from "react";
import useMisdemeanours from "../../hooks/useMisdemeanours";
import { MisdemeanoursContext } from "../../components/misdemeanours/misdemeanour_context";

export function MisdemeanoursProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { misdemeanours, error } = useMisdemeanours();
  const [filterMisdemeanour, setFilterMisdemeanour] = useState<string | null>(
    null
  );

  return (
    <MisdemeanoursContext.Provider
      value={{
        misdemeanours,
        error,
        filterMisdemeanour,
        setFilterMisdemeanour,
      }}
    >
      {children}
    </MisdemeanoursContext.Provider>
  );
}
