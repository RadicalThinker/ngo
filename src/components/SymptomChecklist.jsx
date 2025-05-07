export default function SymptomChecklist({ symptoms, onChange }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {symptoms.map((symptom) => (
          <div key={symptom} className="flex items-center">
            <input
              id={`symptom-${symptom}`}
              type="checkbox"
              onChange={(e) => onChange(symptom, e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor={`symptom-${symptom}`}
              className="ml-2 text-sm text-gray-700"
            >
              {symptom}
            </label>
          </div>
        ))}
      </div>
    )
  }