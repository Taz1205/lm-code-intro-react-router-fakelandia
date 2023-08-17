type DetailsTextAreaProps = {
  value: string;
  onChange: (value: string) => void;
};

export const DetailsTextArea: React.FC<DetailsTextAreaProps> = ({
  value,
  onChange,
}) => (
  <div className="flex flex-row items-center justify-start">
    <label className="text-center text-2xl">
      <strong> Details </strong>
      <textarea
        name="details"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-96 h-48 border-2 ${
          value.length >= 50 ? "border-green-500" : "border-red-500"
        } p-2`}
      />
      {value.length < 50 && (
        <p className="text-red-500">
          Details should be at least 50 characters long.
        </p>
      )}
    </label>
  </div>
);

export default DetailsTextArea;
