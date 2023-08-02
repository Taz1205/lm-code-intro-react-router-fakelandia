import { useMisdemeanour } from "../../hooks/useMisdemeanours";

const emojiMapping = {
  rudeness: "🤪",
  vegetables: "🗣",
  lift: "🥗",
  united: "😈",
};

const MisdemeanoursTable: React.FC = () => {
  const { data: misdemeanours, isLoading, isError } = useMisdemeanour(10);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !Array.isArray(misdemeanours)) {
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
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {misdemeanours.map((misdemeanour, index) => (
          <tr key={index}>
            <td>{misdemeanour.citizenId}</td>
            <td>{new Date(misdemeanour.date).toLocaleDateString()}</td>
            <td>
              <td>
                {emojiMapping[misdemeanour.misdemeanour]}{" "}
                {misdemeanour.misdemeanour}
              </td>

              {misdemeanour.misdemeanour}
            </td>
            <td>{misdemeanour.punishmentIdea}</td>
            <td>
              <img
                src={`https://picsum.photos/200/200?random=${index}`}
                alt="Random photos"
              />{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MisdemeanoursTable;
