import { useState, useContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { MisdemeanoursContext } from "../../components/misdemeanours/misdemeanour_context";

const MisdemeanoursList = () => {
  const misdemeanourContext = useContext(MisdemeanoursContext);

  if (!misdemeanourContext) {
    throw new Error(
      "useMisdemeanours must be used within a MisdemeanoursProvider"
    );
  }

  const { misdemeanours } = misdemeanourContext;
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState("All");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMisdemeanour(event.target.value);
  };

  const filteredMisdemeanours = misdemeanours.filter(
    (misdemeanour: Misdemeanour) =>
      selectedMisdemeanour === "All"
        ? true
        : misdemeanour.type === selectedMisdemeanour
  );

  return (
    <>
      <select value={selectedMisdemeanour} onChange={handleChange}>
        <option value="All">All</option>
        <option value="rudeness">Rudeness</option>
        <option value="vegetables">Vegetables</option>
        <option value="lift">Lift</option>
        <option value="united">United</option>
      </select>

      <ul>
        {filteredMisdemeanours.map(
          (misdemeanour: Misdemeanour, index: number) => (
            <li key={index}>{misdemeanour.title}</li>
          )
        )}
      </ul>
    </>
  );
};

export default MisdemeanoursList;
