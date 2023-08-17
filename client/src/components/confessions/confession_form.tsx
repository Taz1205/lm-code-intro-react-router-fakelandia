import React, { useEffect, useState, useCallback } from "react";
import useConfess from "../../hooks/useConfess";
import SubjectInput from "./subject_input";
import DetailsTextarea from "./details_textarea";
import ReasonSelect from "./reason_select";
import FeedbackSection from "./feedback_section";
import ConfessButton from "./confess_button";

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
    <form onSubmit={handleSubmit} className="space-y-0.5">
      <SubjectInput value={subject} onChange={setSubject} />
      <ReasonSelect value={reason} onChange={setReason} />
      <DetailsTextarea value={details} onChange={setDetails} />
      <ConfessButton isValid={isValid} />
      <FeedbackSection
        isLoading={isLoading}
        error={error}
        feedback={response?.message || null}
      />
    </form>
  );
};

export default ConfessionForm;
