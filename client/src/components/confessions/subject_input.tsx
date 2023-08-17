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
  <div className={`${className} h-20 w-90 p-5`}>
    <label htmlFor="subject" className="block text-xs">
      <strong>Subject</strong>
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id="subject"
      className="h-full text-xs"
    />
  </div>
);

export default SubjectInput;
