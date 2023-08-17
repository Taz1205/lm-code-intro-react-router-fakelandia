type DetailsTextareaProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const DetailsTextarea: React.FC<DetailsTextareaProps> = ({
  value,
  onChange,
  className,
}) => (
  <div className={className}>
    <label htmlFor="details" className="block mb-2 text-black font-bold">
      Details
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id="details"
      className="w-full p-2 border rounded"
    />
  </div>
);

export default DetailsTextarea;
