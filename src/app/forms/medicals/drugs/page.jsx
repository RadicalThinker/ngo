export default function SubstanceHistoryForm() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Personal Info Section */}
      <div className="flex gap-4 mb-6">
        <div>
          <label className="block mb-1">NAME:</label>
          <input type="text" className="border p-1 w-40" />
        </div>
        <div>
          <label className="block mb-1">AGE:</label>
          <input type="text" className="border p-1 w-20" />
        </div>
        <div>
          <label className="block mb-1">DATE OF REGISTRATION:</label>
          <input type="date" className="border p-1" />
        </div>
      </div>

      {/* Substance History Table */}
      <h2 className="text-lg font-bold mb-2">Drinking/Drug History - Details of alcohol/drug abused</h2>
      
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left w-1/4">Drugs</th>
            <th className="border border-gray-300 p-2">First Use</th>
            <th className="border border-gray-300 p-2">Time Of use</th>
            <th className="border border-gray-300 p-2">Excessive Use</th>
            <th className="border border-gray-300 p-2">Type of Drugs</th>
            <th className="border border-gray-300 p-2">Route of Administration</th>
            <th className="border border-gray-300 p-2">The last 30 days</th>
          </tr>
        </thead>
        <tbody>
          {/* Depressants Section */}
          <tr>
            <td className="border border-gray-300 p-2">Depressants</td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Alcohol, Tranquilizers, Sedatives/Hypnotics</td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
          </tr>

          {/* Repeat similar pattern for other sections */}
          {/* Narcotics Analgesics */}
          <tr>
            <td className="border border-gray-300 p-2">Narcotics Analgesics</td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Opium/Heroine/Brown Sugar, Morphine, Codeine, Pentazocine, Buprenorphine</td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
          </tr>

          {/* Cannabis Section */}
          <tr>
            <td className="border border-gray-300 p-2">Cannabis, Ganja, Hashish, Charas, Bhang</td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
          </tr>

          {/* Stimulants Section */}
          <tr>
            <td className="border border-gray-300 p-2">Stimulants</td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Amphetamine, Cocaïne, Ecstacy</td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
            <td className="border border-gray-300"><input className="w-full p-1"/></td>
          </tr>

          {/* Add remaining sections following same pattern */}
        </tbody>
      </table>
    </div>
  );
}