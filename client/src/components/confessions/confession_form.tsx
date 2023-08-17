import React, { useEffect, useState, useCallback } from "react";
import useConfess from "../../hooks/useConfess";
import SubjectInput from "./subject_input";
import DetailsTextarea from "./details_textarea";
import ReasonSelect from "./reason_select";
import FeedbackSection from "./feedback_section";

const ConfessionForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [isValid, setIsValid] = useState(false);

  const { isLoading, error, response, confess } = useConfess();

  const checkValidity = useCallback(() => {
    const isSubjectValid = subject.trim().length >= 10;
    const isReasonValid = reason !== "";
    const isDetailsValid = details.trim().length >= 50;

    setIsValid(isSubjectValid && isReasonValid && isDetailsValid);
  }, [subject, reason, details]);

  useEffect(() => {
    checkValidity();
  }, [checkValidity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      confess({ subject, reason, details });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <SubjectInput
          value={subject}
          onChange={setSubject}
          className="w-1/2 border rounded"
        />
        <ReasonSelect
          value={reason}
          onChange={setReason}
          className="w-1/2 border rounded"
        />
        <DetailsTextarea
          value={details}
          onChange={setDetails}
          className="w-1/2 h-32 border rounded"
        />
        <button
          type="submit"
          disabled={!isValid}
          className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50 mt-2"
        >
          Confess
        </button>
      </div>
      <FeedbackSection
        isLoading={isLoading}
        error={error}
        feedback={response?.message || null}
      />
    </form>
  );
};

export default ConfessionForm;
