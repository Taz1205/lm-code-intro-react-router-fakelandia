import React, { useState, useEffect } from "react";
import {
  Misdemeanour,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject, reason, details]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);
    setSubmitError(null);

    try {
      const response = await fetch("http://localhost:8080/api/confess", {
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

      const responseData = await response.json();

      if (responseData.success) {
        setFeedback(responseData.message);

        setSubject("");
        setReason("");
        setDetails("");

        if (responseData.success && !responseData.justTalked) {
          onConfessionSubmit({
            title: subject,
            type: reason,
            misdemeanour: reason as MisdemeanourKind,
            citizenID: <span>Your Citizen ID Placeholder</span>,
            punishmentIdea: <span>Your Punishment Idea Placeholder</span>,
            citizenId: 12345,
            date: new Date().toISOString(),
          });
        }
      } else {
        setSubmitError(responseData.message);
      }
    } catch (error) {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
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
          <strong>Subject: </strong>
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
          <strong>Reason for contact: </strong>
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
          <strong> Details: </strong>
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
          className="w-50 h-30 border-3 font-bold px-2 py-1 bg-red-400 text-white p-2 rounded border-red hover:bg-blue hover:text-yellow"
        >
          Confess
        </button>
      </div>
      {feedback && <p className="text-green-500 mt-4">{feedback}</p>}
      {isLoading && <p className="text-blue-500 mt-4">Submitting...</p>}
      {feedback && <p className="text-green-500 mt-4">{feedback}</p>}
      {submitError && <p className="text-red-500 mt-4">{submitError}</p>}
    </form>
  );
};

export default ConfessionForm;
