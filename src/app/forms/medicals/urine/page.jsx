export default function UrineSugarChart() {
  const entries = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">URINE SUGAR CHART</h1>
      
      {/* Color of Urine Table */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Color of urine</h2>
        <table className="w-full border-collapse border border-gray-400 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left w-1/6">Color of urine</th>
              {entries.map((entry) => (
                <th key={entry} className="border border-gray-300 p-2">
                  <div className="flex gap-1">
                    <input 
                      type="time" 
                      className="text-xs p-1 border rounded w-20"
                    />
                    <input 
                      type="date" 
                      className="text-xs p-1 border rounded w-24"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['Red', 'Orange', 'Yellow', 'Green', 'Blue'].map((color) => (
              <tr key={color}>
                <td className="border border-gray-300 p-2">{color}</td>
                {entries.map((entry) => (
                  <td key={`${color}-${entry}`} className="border border-gray-300">
                    <input 
                      type="text" 
                      className="w-full p-1 border-0 focus:ring-0 text-center" 
                      placeholder="Result"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Anti-Diabetic Medication Table */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Anti-Diabetic</h2>
        <table className="w-full border-collapse border border-gray-400 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Medication (dosage)</th>
              {entries.map((entry) => (
                <th key={entry} className="border border-gray-300 p-2">
                  <div className="flex gap-1">
                    <input 
                      type="time" 
                      className="text-xs p-1 border rounded w-20"
                    />
                    <input 
                      type="date" 
                      className="text-xs p-1 border rounded w-24"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2"></td>
              {entries.map((entry) => (
                <td key={`med-${entry}`} className="border border-gray-300">
                  <input 
                    type="text" 
                    className="w-full p-1 border-0 focus:ring-0 text-center" 
                    placeholder="Dosage"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Insulin Table */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Insulin</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Insulin (dosage)</th>
              {entries.map((entry) => (
                <th key={entry} className="border border-gray-300 p-2">
                  <div className="flex gap-1">
                    <input 
                      type="time" 
                      className="text-xs p-1 border rounded w-20"
                    />
                    <input 
                      type="date" 
                      className="text-xs p-1 border rounded w-24"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2"></td>
              {entries.map((entry) => (
                <td key={`insulin-${entry}`} className="border border-gray-300">
                  <input 
                    type="text" 
                    className="w-full p-1 border-0 focus:ring-0 text-center" 
                    placeholder="Dosage"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}