import React, { useContext } from "react";
import { MisdemeanoursContext } from "../misdemeanours/misdemeanour_context";
import ConfessionForm from "../confessions/confession_form";

const Confession: React.FC = () => {
  const misdemeanoursContext = useContext(MisdemeanoursContext);

  if (!misdemeanoursContext) {
    throw new Error("Confession must be used within a MisdemeanoursProvider");
  }

  const { addMisdemeanour } = misdemeanoursContext;

  return (
    <div className="flex flex-col min-h-screen bg-yellow-100">
      <p className="text-center text-2xl">
        It is very difficult to catch people committing misdemeanours so we
        apprecaite it when citizens confess to us directly.
      </p>
      <br />
      <p className="text-center text-2xl">
        However, if you are having a hard day and need to vent then you are
        welcome to contact us here too. It is up to you!
      </p>
      <br />
      <br />
      <ConfessionForm onConfessionSubmit={addMisdemeanour} />
    </div>
  );
};
export default Confession;
