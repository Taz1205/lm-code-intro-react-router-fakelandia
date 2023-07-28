import { Misdemeanour } from "../../types/misdemeanours.types";

type MisdemeanoursTableProps = {
  misdemeanours: Misdemeanour[];
};

const emojiMapping = {
  "Mild Public Rudeness": "🤪",
  "Speaking in a Lift": "🗣",
  "Not Eating Your Vegetables": "🥗",
  "Supporting Manchester United": "😈",
};

const MisdemeanoursTable: React.FC<MisdemeanoursTableProps> = ({
  misdemeanours,
}) => {
  if (!Array.isArray(misdemeanours)) {
    return <div>There was an error loading the data.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Citizen ID</th>
          <th>Date</th>
          <th>Misdemeanour</th>
          <th>Punishment Idea</th>
        </tr>
      </thead>
      <tbody>
        {misdemeanours.map((misdemeanour, index) => (
          <tr key={index}>
            <td>{misdemeanour.citizenID}</td>
            <td>{new Date(misdemeanour.date).toLocaleDateString()}</td>
            <td>
              {emojiMapping[misdemeanour.type as keyof typeof emojiMapping]}{" "}
              {misdemeanour.type}
            </td>
            <td>{misdemeanour.punishmentIdea}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MisdemeanoursTable;
