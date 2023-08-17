type ReasonSelectProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const ReasonSelect: React.FC<ReasonSelectProps> = ({
  value,
  onChange,
  className,
}) => (
  <div className={className}>
    <label htmlFor="reason">
      <strong>Reason</strong>
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id="reason"
    >
      <option value="" disabled>
        --Please select an option--
      </option>
      <option value="misdemeanour">Misdemeanour</option>
      <option value="justTalk">I just want to talk</option>
    </select>
  </div>
);
export default ReasonSelect;
