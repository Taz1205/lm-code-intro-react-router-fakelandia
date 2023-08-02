import { Misdemeanour } from "../types/misdemeanours.types";
import { useQuery } from "react-query";
import fetch from "cross-fetch";

export const useMisdemeanour = (amount: number) => {
  const fetchData = async (): Promise<Misdemeanour[]> => {
    const response = await fetch(
      `http://localhost:8080/api/misdemeanours/${amount}`
    );
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return await response.json();
  };

  const query = useQuery<Misdemeanour[], Error>({
    queryKey: ["misdemeanours", amount],
    queryFn: fetchData,
  });

  return query;
};

export default useMisdemeanour;
