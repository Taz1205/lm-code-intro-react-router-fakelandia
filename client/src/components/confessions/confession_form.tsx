import React, { useState, useEffect } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";

type ConfessionFormProps = {
  onConfessionSubmit: (newMisdemeanour: Misdemeanour) => void;
};

const ConfessionForm: React.FC<ConfessionFormProps> = ({
  onConfessionSubmit,
}) => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const checkValidity = () => {
    if (
      subject.trim().length >= 10 &&
      reason.trim() !== "" &&
      reason !== "--Please select an option--" &&
      details.trim().length >= 50
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    checkValidity();
  }, [subject, reason, details]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);
    setSubmitError(null);

    try {
      const response = await fetch(`http://localhost:8080/api/confess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject,
          reason: reason,
          details: details,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData.success) {
        setFeedback(responseData.message);

        if (responseData.justTalked === false) {
          onConfessionSubmit({
            subject: subject,
            reason: reason,
            details: details,
          });
        }
      } else {
        throw new Error(responseData.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError("An unexpected error occurred");
      }
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <div>
        <label className="text-center text-2xl">
          <strong>Subject </strong>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`border-2 ${
              subject.length >= 10 ? "border-green-500" : "border-red-500"
            } p-2`}
          />
          {subject.length < 10 && (
            <p className="text-red-500">
              Subject should be at least 10 characters long.
            </p>
          )}
        </label>
      </div>
      <br />
      <div>
        <label className="text-center text-2xl">
          <strong>Reason for contact </strong>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className={`w-64 border-2 ${
              reason !== "" && reason !== "--Please select an option--"
                ? "border-green-500"
                : "border-red-500"
            } p-2`}
          >
            <option value="" disabled>
              --Please select an option--
            </option>
            <option value="misdemeanour">Misdemeanour</option>
            <option value="justTalk">I just want to talk</option>
          </select>
        </label>
      </div>
      <br />
      <div className="flex flex-row items-center justify-start">
        <label className="text-center text-2xl">
          <strong> Details </strong>
          <textarea
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={`w-96 h-48 border-2 ${
              details.length >= 50 ? "border-green-500" : "border-red-500"
            } p-2`}
            placeholder="Describe your confession in detail. For instance, ..."
          />
          {details.length < 50 && (
            <p className="text-red-500">
              Details should be at least 50 characters long.
            </p>
          )}
        </label>
      </div>
      <br />
      <div>
        <button
          disabled={!isValid}
          type="submit"
          className="w-50 h-30 border-3 font-bold px-2 py-1 bg-red-400 text-white p-3"
        >
          Confess
        </button>
      </div>
      <br />
      {feedback && <p className="text-green-500 mt-4">{feedback}</p>}
      {isLoading && <p className="text-blue-500 mt-4">Submitting...</p>}
      {submitError && <p className="text-red-500 mt-4">{submitError}</p>}
    </form>
  );
};

export default ConfessionForm;
