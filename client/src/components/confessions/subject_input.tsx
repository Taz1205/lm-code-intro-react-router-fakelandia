type SubjectInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SubjectInput: React.FC<SubjectInputProps> = ({
  value,
  onChange,
}) => (
  <div>
    <label className="text-center text-2xl">
      <strong>Subject </strong>
      <input
        type="text"
        name="subject"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border-2 ${
          value.length >= 10 ? "border-green-500" : "border-red-500"
        } p-2`}
      />
      {value.length < 10 && (
        <p className="text-red-500">
          Subject should be at least 10 characters long.
        </p>
      )}
    </label>
  </div>
);
export default SubjectInput;
