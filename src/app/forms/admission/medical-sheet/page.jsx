'use client'
import { useState, useRef } from 'react';

export default function MedicalExaminationSheet() {
  const [formData, setFormData] = useState({
    uid: '',
    date: '',
    name: '',
    sex: '',
    age: '',
    weight: '',
    physician: '',
    provisionalDiagnosis: '',
    examinationDate: '',
    bp: '',
    pulse: '',
    weightAtAdmission: '',
    temp: '',
    doctorName: '',
    conditions: {
      tremors: null,
      jaundice: null,
      malnutrition: null,
      lymphNodes: null,
      glossitis: null,
      abscess: null,
      gynaecomastia: null,
      pedalEdema: null,
      lossOfBodyHair: null,
      wastingOfMuscles: null,
      anaemia: null,
      injectionMarks: null,
      flushedFace: null,
      spiderNaevi: null,
      palmarErythema: null,
      clubbingOfNails: null
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConditionChange = (condition, value) => {
    setFormData({
      ...formData,
      conditions: {
        ...formData.conditions,
        [condition]: value
      }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  // CSS for print media
  const printStyles = `
    @media print {
      body {
        margin: 0;
        padding: 0;
      }
      .print-button, .no-print {
        display: none !important;
      }
      .print-container {
        width: 100%;
        margin: 0;
        padding: 0.5cm;
      }
      .print-document {
        border: 1px solid #000;
        padding: 1cm;
        font-size: 12pt;
      }
      .underline-input {
        border-bottom: 1px solid #000;
        margin-right: 4px;
      }
      .heading {
        font-weight: bold;
        text-align: center;
        font-size: 16pt;
        margin-bottom: 20px;
        text-decoration: underline;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      td {
        padding: 4px;
      }
      .condition-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .condition-item {
        display: flex;
        justify-content: space-between;
      }
      .doctor-signature {
        text-align: right;
        margin-top: 30px;
      }
      .signature-line {
        border-bottom: 1px solid #000;
        display: inline-block;
        width: 200px;
        text-align: center;
      }
    }
  `;

  return (
    <>
      <style>{printStyles}</style>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handlePrint}
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4 print-button"
          >
            Print Form
          </button>
          
          <div className="print-container">
            <div className="bg-white p-8 shadow-md print-document">
              <h1 className="text-2xl font-bold text-center uppercase underline mb-6 heading">MEDICAL EXAMINATION SHEET</h1>
              
              {/* Patient details section */}
              <table className="w-full mb-6">
                <tbody>
                  <tr>
                    <td width="25%">
                      <span className="font-medium">UID No.</span>
                      <input
                        type="text"
                        name="uid"
                        value={formData.uid}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                      />
                    </td>
                    <td width="25%">
                      <span className="font-medium">Date.</span>
                      <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                      />
                    </td>
                    <td width="35%">
                      <span className="font-medium">Name.</span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                        style={{ width: "70%" }}
                      />
                    </td>
                    <td width="15%">
                      <span className="font-medium">Sex.</span>
                      <input
                        type="text"
                        name="sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-medium">Age.</span>
                      <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                      />
                    </td>
                    <td>
                      <span className="font-medium">Weight</span>
                      <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                      />
                    </td>
                    <td colSpan="2">
                      <span className="font-medium">Physician</span>
                      <input
                        type="text"
                        name="physician"
                        value={formData.physician}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                        style={{ width: "80%" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <span className="font-medium">Provisional Diagnosis:</span>
                      <input
                        type="text"
                        name="provisionalDiagnosis"
                        value={formData.provisionalDiagnosis}
                        onChange={handleInputChange}
                        className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                        style={{ width: "75%" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              
              {/* Vitals and conditions section */}
              <table className="w-full border-t border-l border-r border-black" style={{ borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td width="15%" className="border-r border-black p-2 align-top">
                      <span className="font-medium">Date:</span>
                      <input
                        type="text"
                        name="examinationDate"
                        value={formData.examinationDate}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-1 border-b border-black focus:outline-none underline-input"
                      />
                    </td>
                    <td width="85%" className="p-2">
                      <div className="font-medium mb-2">Vitals at the time of admission</div>
                      
                      <div className="ml-4 mb-4">
                        <div className="mb-2">
                          <span>B.P. / Pulse:</span>
                          <input
                            type="text"
                            name="bp"
                            value={formData.bp}
                            onChange={handleInputChange}
                            className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                            style={{ width: "60%" }}
                          />
                        </div>
                        
                        <div className="mb-2">
                          <span>Weight:</span>
                          <input
                            type="text"
                            name="weightAtAdmission"
                            value={formData.weightAtAdmission}
                            onChange={handleInputChange}
                            className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                            style={{ width: "60%" }}
                          />
                        </div>
                        
                        <div className="mb-4">
                          <span>Temp:</span>
                          <input
                            type="text"
                            name="temp"
                            value={formData.temp}
                            onChange={handleInputChange}
                            className="ml-2 px-1 border-b border-black focus:outline-none underline-input"
                            style={{ width: "60%" }}
                          />
                        </div>
                        
                        <div className="font-medium mb-2">Physical Conditions at the time of admission</div>
                        
                        <div className="condition-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Tremors</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.tremors === true}
                                  onChange={() => handleConditionChange('tremors', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.tremors === false}
                                  onChange={() => handleConditionChange('tremors', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Loss of body hair</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.lossOfBodyHair === true}
                                  onChange={() => handleConditionChange('lossOfBodyHair', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.lossOfBodyHair === false}
                                  onChange={() => handleConditionChange('lossOfBodyHair', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Jaundice</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.jaundice === true}
                                  onChange={() => handleConditionChange('jaundice', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.jaundice === false}
                                  onChange={() => handleConditionChange('jaundice', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Wasting of muscles</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.wastingOfMuscles === true}
                                  onChange={() => handleConditionChange('wastingOfMuscles', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.wastingOfMuscles === false}
                                  onChange={() => handleConditionChange('wastingOfMuscles', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Malnutrition</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.malnutrition === true}
                                  onChange={() => handleConditionChange('malnutrition', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.malnutrition === false}
                                  onChange={() => handleConditionChange('malnutrition', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Anaemia</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.anaemia === true}
                                  onChange={() => handleConditionChange('anaemia', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.anaemia === false}
                                  onChange={() => handleConditionChange('anaemia', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Lymph Nodes</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.lymphNodes === true}
                                  onChange={() => handleConditionChange('lymphNodes', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.lymphNodes === false}
                                  onChange={() => handleConditionChange('lymphNodes', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Injection marks</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.injectionMarks === true}
                                  onChange={() => handleConditionChange('injectionMarks', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.injectionMarks === false}
                                  onChange={() => handleConditionChange('injectionMarks', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Glossitis</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.glossitis === true}
                                  onChange={() => handleConditionChange('glossitis', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.glossitis === false}
                                  onChange={() => handleConditionChange('glossitis', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Flushed Face</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.flushedFace === true}
                                  onChange={() => handleConditionChange('flushedFace', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.flushedFace === false}
                                  onChange={() => handleConditionChange('flushedFace', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Abscess</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.abscess === true}
                                  onChange={() => handleConditionChange('abscess', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.abscess === false}
                                  onChange={() => handleConditionChange('abscess', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Spider naevi</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.spiderNaevi === true}
                                  onChange={() => handleConditionChange('spiderNaevi', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.spiderNaevi === false}
                                  onChange={() => handleConditionChange('spiderNaevi', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Gynaecomastia</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.gynaecomastia === true}
                                  onChange={() => handleConditionChange('gynaecomastia', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.gynaecomastia === false}
                                  onChange={() => handleConditionChange('gynaecomastia', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Palmar erythema</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.palmarErythema === true}
                                  onChange={() => handleConditionChange('palmarErythema', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.palmarErythema === false}
                                  onChange={() => handleConditionChange('palmarErythema', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Pedal edema</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.pedalEdema === true}
                                  onChange={() => handleConditionChange('pedalEdema', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.pedalEdema === false}
                                  onChange={() => handleConditionChange('pedalEdema', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="condition-item" style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Clubbing of nails</span>
                            <div>
                              <label className="inline-flex items-center mr-1">
                                <input
                                  type="radio"
                                  checked={formData.conditions.clubbingOfNails === true}
                                  onChange={() => handleConditionChange('clubbingOfNails', true)}
                                  className="mr-1"
                                />
                                <span>yes</span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  checked={formData.conditions.clubbingOfNails === false}
                                  onChange={() => handleConditionChange('clubbingOfNails', false)}
                                  className="mr-1"
                                />
                                <span>no</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="doctor-signature" style={{ textAlign: "right", marginTop: "30px" }}>
                          <div className="signature-line" style={{ borderBottom: "1px solid #000", display: "inline-block", width: "200px", textAlign: "center" }}>
                            <input
                              type="text"
                              name="doctorName"
                              value={formData.doctorName}
                              onChange={handleInputChange}
                              className="text-center w-full focus:outline-none"
                              style={{ background: "transparent" }}
                            />
                          </div>
                          <div>Dr...........................................</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}