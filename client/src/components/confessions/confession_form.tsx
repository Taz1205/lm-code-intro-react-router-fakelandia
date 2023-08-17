import React, { useState } from "react";
import useConfess from "../../hooks/use_confess";
import SubjectInput from "./subject_input";
import DetailsTextarea from "./details_textarea";
import ReasonSelect from "./reason_select";
import FeedbackSection from "./feedback_section";

const ConfessionForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const { isLoading, error, response, confess } = useConfess();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confess({ subject, reason, details });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SubjectInput value={subject} onChange={setSubject} />
      <ReasonSelect value={reason} onChange={setReason} />
      <DetailsTextarea value={details} onChange={setDetails} />
      <FeedbackSection
        isLoading={isLoading}
        error={error}
        feedback={response?.message}
      />
    </form>
  );
};

export default ConfessionForm;
