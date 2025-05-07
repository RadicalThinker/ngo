export default function DynamicChecklist({ symptoms, onChange }) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {symptoms.map((symptom) => (
          <label key={symptom} className="flex items-center">
            <input
              type="checkbox"
              onChange={(e) => onChange(symptom, e.target.checked)}
            />
            <span className="ml-2">{symptom}</span>
          </label>
        ))}
      </div>
    );
  }