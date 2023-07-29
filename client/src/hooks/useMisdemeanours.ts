import { useState, useEffect } from "react";
import { Misdemeanour } from "../../src/types/misdemeanours.types";

const useMisdemeanours = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const [filterMisdemeanour, setFilterMisdemeanour] = useState<string | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMisdemeanours = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/misdemeanours/10");

        if (!res.ok) {
          throw new Error("Could not fetch misdemeanours");
        }

        const data = await res.json();
        console.log(data);
        setMisdemeanours(data);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("An error occurred")
        );
      }
    };

    fetchMisdemeanours();
  }, []);

  return { misdemeanours, filterMisdemeanour, setFilterMisdemeanour, error };
};

export default useMisdemeanours;
