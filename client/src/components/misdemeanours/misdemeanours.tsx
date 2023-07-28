import React, { useContext } from "react";
import { MisdemeanoursContext } from "../../components/misdemeanours/misdemeanour_context";
import MisdemeanoursTable from "../../components/misdemeanours/misdemeanour_table";

const Misdemeanours: React.FC = () => {
  const misdemeanours = useContext(MisdemeanoursContext);

  if (!misdemeanours) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-0 p-0 border-0 bg-yellow-100">
      <MisdemeanoursTable misdemeanours={misdemeanours} />
    </div>
  );
};

export default Misdemeanours;
