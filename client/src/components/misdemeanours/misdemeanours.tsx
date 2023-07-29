import React, { useContext } from "react";
import { MisdemeanoursContext } from "../../components/misdemeanours/misdemeanour_context";
import MisdemeanoursTable from "../../components/misdemeanours/misdemeanour_table";

const Misdemeanours: React.FC = () => {
  const context = useContext(MisdemeanoursContext);

  if (!context) {
    throw new Error(
      "useMisdemeanours must be used within a MisdemeanoursProvider"
    );
  }

  const { misdemeanours } = context;

  return (
    <div className="m-0 p-0 border-0 bg-yellow-100">
      <MisdemeanoursTable misdemeanours={misdemeanours} />
    </div>
  );
};

export default Misdemeanours;
