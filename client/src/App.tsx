import { useState } from "react";
import { MisdemeanoursContext } from "../../client/src/components/misdemeanours/misdemeanour_context";
import useMisdemeanours from "./hooks/useMisdemeanours";
import Router from "./components/router/router";
import "./index.css";

function App() {
  const { data, error } = useMisdemeanours(10);
  const misdemeanours = data ?? [];

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
      <div className="min-h-screen">
        <Router />
      </div>
    </MisdemeanoursContext.Provider>
  );
}

export default App;
