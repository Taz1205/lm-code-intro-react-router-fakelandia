import { useState } from "react";

type ConfessResponse = {
  success: boolean;
  justTalked?: boolean;
  message: string;
};

type UseConfessReturn = {
  isLoading: boolean;
  error: string | null;
  response: ConfessResponse | null;
  confess: (data: {
    subject: string;
    reason: string;
    details: string;
  }) => Promise<void>;
};

export const useConfess = (): UseConfessReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ConfessResponse | null>(null);

  const confess = async (data: {
    subject: string;
    reason: string;
    details: string;
  }) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(`http://localhost:8080/api/confess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
      }

      const responseData = await res.json();
      setResponse(responseData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    response,
    confess,
  };
};

export default useConfess;
