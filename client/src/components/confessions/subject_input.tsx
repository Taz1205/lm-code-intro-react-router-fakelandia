// subject_input.tsx
type SubjectInputProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const SubjectInput: React.FC<SubjectInputProps> = ({
  value,
  onChange,
  className,
}) => (
  <div className={className}>
    <label htmlFor="subject">
      <strong>Subject</strong>
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id="subject"
    />
  </div>
);

export default SubjectInput;
