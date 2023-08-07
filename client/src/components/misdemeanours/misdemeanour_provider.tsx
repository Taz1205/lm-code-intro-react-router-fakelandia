import React, { useState } from "react";
import useMisdemeanours from "../../hooks/useMisdemeanours";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { MisdemeanoursContext } from "../../components/misdemeanours/misdemeanour_context";

export function MisdemeanoursProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: misdemeanours = [], error } = useMisdemeanours(10);
  const [localMisdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  const combinedMisdemeanours = [...misdemeanours, ...localMisdemeanours];

  const [filterMisdemeanour, setFilterMisdemeanour] = useState<string | null>(
    null
  );

  const addMisdemeanour = async (newMisdemeanour: Misdemeanour) => {
    try {
      const response = await fetch("/api/misdemeanours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMisdemeanour),
      });

      if (!response.ok) {
        throw new Error("Failed to add misdemeanour.");
      }

      setMisdemeanours((prev) => [...prev, newMisdemeanour]);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <MisdemeanoursContext.Provider
      value={{
        misdemeanours: combinedMisdemeanours,
        error,
        filterMisdemeanour,
        setFilterMisdemeanour,
        addMisdemeanour,
      }}
    >
      {children}
    </MisdemeanoursContext.Provider>
  );
}
