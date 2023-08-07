import { useState, useEffect } from "react";
import { MisdemeanoursContext } from "../../client/src/components/misdemeanours/misdemeanour_context";
import useMisdemeanours from "./hooks/useMisdemeanours";
import Router from "./components/router/router";
import "./index.css";
import { Misdemeanour } from "./types/misdemeanours.types";

function App() {
  const { data, error } = useMisdemeanours(10);

  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>(
    data ?? []
  );

  const [filterMisdemeanour, setFilterMisdemeanour] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (data && misdemeanours.length === 0) {
      setMisdemeanours(data);
    }
  }, [data, misdemeanours]);

  const addMisdemeanour = (newMisdemeanour: Misdemeanour) => {
    setMisdemeanours((prevMisdemeanours: Misdemeanour[]) => [
      ...prevMisdemeanours,
      newMisdemeanour,
    ]);
  };

  return (
    <MisdemeanoursContext.Provider
      value={{
        misdemeanours,
        error,
        filterMisdemeanour,
        setFilterMisdemeanour,
        addMisdemeanour,
      }}
    >
      <div className="min-h-screen">
        <Router />
      </div>
    </MisdemeanoursContext.Provider>
  );
}

export default App;
