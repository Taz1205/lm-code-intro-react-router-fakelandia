import { useMisdemeanour } from "../../hooks/useMisdemeanours";
import { Misdemeanour as MisdemeanourType } from "../../types/misdemeanours.types";

const Misdemeanour = () => {
  const { status, data, error } = useMisdemeanour(10);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  if (status === "success" && data) {
    return (
      <div>
        {data.map((misdemeanour: MisdemeanourType) => (
          <div key={misdemeanour.citizenId}>
            <h2>{misdemeanour.misdemeanour}</h2>
            <p>{misdemeanour.date}</p>
          </div>
        ))}
      </div>
    );
  }
  return <div>No misdemeanour data.</div>;
};

export default Misdemeanour;
