import React, { useState, useEffect } from "react";

const ConfessionForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [isValid, setIsValid] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ subject, reason, details });
    setSubject("");
    setReason("");
    setDetails("");
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
            <option value="">--Please select an option--</option>
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
            className={`w-96 h-64 border-2 ${
              details.length >= 50 ? "border-green-500" : "border-red-500"
            } p-2`}
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
          className="border-4 font-bold px-2 py-1 text-sm bg-black text-white p-2 rounded border-red hover:bg-blue hover:text-yellow"
        >
          Confess
        </button>
      </div>
    </form>
  );
};

export default ConfessionForm;
