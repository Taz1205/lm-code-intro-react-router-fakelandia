import { useState, useContext } from "react";
import { MisdemeanoursContext } from "../../components/misdemeanours/misdemeanour_context";

const MisdemeanoursList = () => {
  const misdemeanours = useContext(MisdemeanoursContext);
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState("All");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMisdemeanour(event.target.value);
  };

  const filteredMisdemeanours = misdemeanours.filter((misdemeanour) =>
    selectedMisdemeanour === "All"
      ? true
      : misdemeanour.type === selectedMisdemeanour
  );

  return (
    <>
      <select value={selectedMisdemeanour} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Type1">Type1</option>
        <option value="Type2">Type2</option>
        <option value="Type3">Type3</option>
        <option value="Type4">Type4</option>
      </select>

      <ul>
        {filteredMisdemeanours.map((misdemeanour, index) => (
          <li key={index}>{misdemeanour.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MisdemeanoursList;
