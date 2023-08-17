type FeedbackSectionProps = {
  feedback: string | null;
  isLoading: boolean;
  error: string | null;
};

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  feedback,
  isLoading,
  error,
}) => (
  <div>
    {feedback && <p className="text-green-500 mt-4">{feedback}</p>}
    {isLoading && <p className="text-blue-500 mt-4">Submitting...</p>}
    {error && <p className="text-red-500 mt-4">{error}</p>}
  </div>
);
export default FeedbackSection;
