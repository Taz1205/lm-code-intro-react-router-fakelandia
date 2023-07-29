import React, { useState } from "react";

const ConfessionForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

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
        <label className=" text-center text-2xl">
          <strong>Subject: </strong>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label className="text-center text-2xl">
          <strong>Reason for contact: </strong>
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
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
            className="w-96 h-64"
          />
        </label>
      </div>
      <br />
      <div>
        <button
          type="submit"
          className="border-4 font-bold px-2 py-1 text-sm bg-white text-black p-2 rounded border-black hover:bg-blue hover:text-black"
        >
          Confess
        </button>
      </div>
    </form>
  );
};

export default ConfessionForm;
