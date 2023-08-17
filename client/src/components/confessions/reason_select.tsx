type ReasonSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export const ReasonSelect: React.FC<ReasonSelectProps> = ({
  value,
  onChange,
}) => (
  <div>
    <label className="text-center text-2xl">
      <strong>Reason for contact </strong>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-64 border-2 ${
          value !== "" && value !== "--Please select an option--"
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
);
export default ReasonSelect;
