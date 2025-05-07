'use client'

export default function SessionTypeSelector({ options, value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`p-2 border rounded-lg text-sm text-center ${
            value === option.value
              ? 'bg-blue-50 border-blue-500 text-blue-700'
              : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}