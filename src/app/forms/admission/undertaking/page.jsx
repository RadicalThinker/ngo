'use client'
import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export default function AdmissionForms() {
  // Form states
  const [patientInfo, setPatientInfo] = useState({
    patientName: '',
    admissionDate: '',
    address: '',
    phone: '',
    infoDate: '',
    patientSignature: '',
    guardianSignature: ''
  })

  const [undertaking, setUndertaking] = useState({
    patientName: '',
    agreeTerms: false,
    residentSignature: '',
    guardianSignature: ''
  })

  const [valuablesDisclaimer, setValuablesDisclaimer] = useState({
    patientName: '',
    guardianName: '',
    guardianRelation: '',
    patientSignature: '',
    guardianSignature: '',
    date: ''
  })

  const [showHardcopy, setShowHardcopy] = useState(false)
  const hardcopyRef = useRef()

  // Handle changes
  const handlePatientInfoChange = (e) => {
    const { name, value } = e.target
    setPatientInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleUndertakingChange = (e) => {
    const { name, value, type, checked } = e.target
    setUndertaking(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleValuablesChange = (e) => {
    const { name, value } = e.target
    setValuablesDisclaimer(prev => ({ ...prev, [name]: value }))
  }

  // Handle signatures
  const handleSignature = (form, field, signature) => {
    if (form === 'patientInfo') {
      setPatientInfo(prev => ({ ...prev, [field]: signature }))
    } else if (form === 'undertaking') {
      setUndertaking(prev => ({ ...prev, [field]: signature }))
    } else {
      setValuablesDisclaimer(prev => ({ ...prev, [field]: signature }))
    }
  }

  // Print functionality
  const handlePrint = useReactToPrint({
    content: () => hardcopyRef.current,
    pageStyle: `
      @page { size: A4; margin: 15mm; }
      @media print { 
        body { -webkit-print-color-adjust: exact; }
        .hardcopy { box-shadow: none; padding: 0; }
        .no-print { display: none; }
      }
    `,
    documentTitle: 'Admission_Documents'
  })

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Patient Information Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Patient Information Form</h2>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name of Patient*
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={patientInfo.patientName}
                  onChange={handlePatientInfoChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Admission*
                </label>
                <input
                  type="date"
                  name="admissionDate"
                  value={patientInfo.admissionDate}
                  onChange={handlePatientInfoChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address and Phone No.*
              </label>
              <textarea
                name="address"
                value={patientInfo.address}
                onChange={handlePatientInfoChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows={2}
                required
              />
            </div>
            
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                For Family Members and Patient's Information
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                <p className="mb-2">
                  Delirium tremor and alcoholic rum fits / seizure disorder are the major withdrawal symptoms of alcohol and substance abuse, where patient is disoriented and may have different delusions and hallucinations.
                </p>
                <p>
                  These occur is one in 1000 alcoholics and lasts from a week to 10 days. It gradually starts after 72 hours of last alcohol / substance intake. The patient has to be admitted in hospital and the expenses have to be borne by family members. Family members have been explained of this situation and require their co-operation. In this case family member and patient will be informed. The patient will be hospitalized, all expenses and caring will be done by patient's family.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="infoDate"
                  value={patientInfo.infoDate}
                  onChange={handlePatientInfoChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Patient Signature
                </h4>
                <div className="border border-gray-300 rounded-lg p-2 h-32">
                  {patientInfo.patientSignature ? (
                    <img 
                      src={patientInfo.patientSignature} 
                      alt="Patient Signature" 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-400 text-center h-full flex items-center justify-center">
                      Signature will appear here
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Parent/Guardian Signature
                </h4>
                <div className="border border-gray-300 rounded-lg p-2 h-32">
                  {patientInfo.guardianSignature ? (
                    <img 
                      src={patientInfo.guardianSignature} 
                      alt="Guardian Signature" 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-400 text-center h-full flex items-center justify-center">
                      Signature will appear here
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Undertaking Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Undertaking</h2>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name*
              </label>
              <input
                type="text"
                name="patientName"
                value={undertaking.patientName}
                onChange={handleUndertakingChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={undertaking.agreeTerms}
                  onChange={handleUndertakingChange}
                  className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label className="ml-2 text-sm text-gray-700">
                  I have decided to give up drugs and voluntarily join the rehabilitation program
                </label>
              </div>
              
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>
                  I solemnly vow to carry out anything that is required to be done by me under the guidance of the staff during my rehabilitation
                </li>
                <li>
                  I will strictly follow the instructions given to me concerning discipline
                </li>
                <li>
                  If I leave/escape during treatment, I will not hold the center responsible
                </li>
                <li>
                  I won't claim any charges for conveyances and will collect belongings within a week
                </li>
                <li>
                  I understand the center will not be responsible for anything in any case
                </li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Resident Signature*
                </h4>
                <div className="border border-gray-300 rounded-lg p-2 h-32">
                  {undertaking.residentSignature ? (
                    <img 
                      src={undertaking.residentSignature} 
                      alt="Resident Signature" 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-400 text-center h-full flex items-center justify-center">
                      Signature will appear here
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Parent/Guardian Signature*
                </h4>
                <div className="border border-gray-300 rounded-lg p-2 h-32">
                  {undertaking.guardianSignature ? (
                    <img 
                      src={undertaking.guardianSignature} 
                      alt="Guardian Signature" 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-400 text-center h-full flex items-center justify-center">
                      Signature will appear here
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Valuables Disclaimer Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Valuables Disclaimer</h2>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name*
              </label>
              <input
                type="text"
                name="patientName"
                value={valuablesDisclaimer.patientName}
                onChange={handleValuablesChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>We strongly recommend that patients keep no valuables, no jewellery, no credit cards, or cash during their stay</li>
                <li>We recommend patients keep no items of personal value with them during their rehab center stay</li>
                <li>We strongly encourage patients to send all items of value home with family, friends or guardians for safekeeping</li>
                <li>In extenuating circumstances items can be placed in the Rehab safe</li>
                <li>Rehab does not take responsibility for items of value kept by patients</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guardian Name*
                </label>
                <input
                  type="text"
                  name="guardianName"
                  value={valuablesDisclaimer.guardianName}
                  onChange={handleValuablesChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Relation to Patient*
                </label>
                <input
                  type="text"
                  name="guardianRelation"
                  value={valuablesDisclaimer.guardianRelation}
                  onChange={handleValuablesChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date*
                </label>
                <input
                  type="date"
                  name="date"
                  value={valuablesDisclaimer.date}
                  onChange={handleValuablesChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Patient/Parent Signature*
                </h4>
                <div className="border border-gray-300 rounded-lg p-2 h-32">
                  {valuablesDisclaimer.patientSignature ? (
                    <img 
                      src={valuablesDisclaimer.patientSignature} 
                      alt="Patient Signature" 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-400 text-center h-full flex items-center justify-center">
                      Signature will appear here
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Guardian Signature*
                </h4>
                <div className="border border-gray-300 rounded-lg p-2 h-32">
                  {valuablesDisclaimer.guardianSignature ? (
                    <img 
                      src={valuablesDisclaimer.guardianSignature} 
                      alt="Guardian Signature" 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-400 text-center h-full flex items-center justify-center">
                      Signature will appear here
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setShowHardcopy(true)}
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
          disabled={!patientInfo.patientName || !undertaking.patientName || !valuablesDisclaimer.patientName}
        >
          Preview Hardcopy
        </button>
      </div>

      {/* Hardcopy Preview Modal */}
      {showHardcopy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Document Preview</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="bg-blue-600 text-white py-1 px-3 rounded no-print"
                  >
                    Print
                  </button>
                  <button
                    onClick={() => setShowHardcopy(false)}
                    className="bg-gray-200 text-gray-800 py-1 px-3 rounded no-print"
                  >
                    Close
                  </button>
                </div>
              </div>
              
              <div 
                ref={hardcopyRef} 
                className="hardcopy p-8 bg-white"
                style={{ fontFamily: "'Times New Roman', serif", fontSize: '14px' }}
              >
                {/* Patient Information Document */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">ALTERNATIVE TO ADDICTION CREATING CENTRE</h1>
                  <h2 className="text-xl font-semibold">IRCA</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <p>Name of Patient : <u className="font-bold">{patientInfo.patientName || '_________'}</u></p>
                    <p>Date of Admission : <u className="font-bold">{patientInfo.admissionDate || '_________'}</u></p>
                  </div>
                  
                  <p>Address and Phone No. : <u className="font-bold">{patientInfo.address || '_________'}</u></p>
                  
                  <div className="mt-4">
                    <h3 className="font-bold mb-2">For Family Members and Patient's Information</h3>
                    <p className="mb-2">
                      Delirium tremor and alcoholic rum fits / seizure disorder are the major withdrawal symptoms of alcohol and substance abuse, where patient is disoriented and may have different delusions and hallucinations.
                    </p>
                    <p>
                      These occur is one in 1000 alcoholics and lasts from a week to 10 days. It gradually starts after 72 hours of last alcohol / substance intake. The patient has to be admitted in hospital and the expenses have to be borne by family members. Family members have been explained of this situation and require their co-operation. In this case family member and patient will be informed. The patient will be hospitalized, all expenses and caring will be done by patient's family.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <p>This <u className="font-bold">{patientInfo.infoDate || '_________'}</u> day <u className="font-bold">_________</u> 20<u className="font-bold">___</u> by the within named.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                      <div>
                        <div className="border-t border-black pt-2 inline-block min-w-[200px]">
                          1) <u className="font-bold">_________</u>
                        </div>
                        <div className="border-t border-black pt-2 text-center mt-4">
                          {patientInfo.patientSignature ? (
                            <img 
                              src={patientInfo.patientSignature} 
                              alt="Patient Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature</span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <div className="border-t border-black pt-2 inline-block min-w-[200px]">
                          2) <u className="font-bold">_________</u>
                        </div>
                        <div className="border-t border-black pt-2 text-center mt-4">
                          {patientInfo.guardianSignature ? (
                            <img 
                              src={patientInfo.guardianSignature} 
                              alt="Guardian Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Page Break */}
                <div className="page-break" style={{ pageBreakAfter: 'always' }}></div>
                
                {/* Undertaking Document */}
                <div className="mt-8">
                  <h1 className="text-xl font-bold text-center mb-6">UNDERTAKING</h1>
                  
                  <div className="space-y-4">
                    <p>
                      1 I <u className="font-bold">{undertaking.patientName || '_________'}</u> have decided to give up drugs.
                    </p>
                    
                    <p>
                      2 I, at my own wish to join <strong>Alternative to Addiction Creating Centre, IRCA</strong> for specific rehabilitation programme.
                    </p>
                    
                    <p>
                      3 I have thoroughly gone through the details explained to me clearly understood the rehabilitation programme. I do agree to abide by the terms and condition of the center as under:-
                    </p>
                    
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        I solemnly vow to carry out anything that is required to be done by me under the guidance of the staff of the center during the course of my rehabilitation programme.
                      </li>
                      <li>
                        I will strictly follow the instructions given to me from time to time by the staff of the center concerning of discipline etc.
                      </li>
                      <li>
                        While taking rehabilitation programme if I leave/escape in between or asked to leave for any wrongdoing on my part. I will not claim the center responsibility and ultimately face the consequences whatsoever it may be for my folly.
                      </li>
                      <li>
                        After leaving the center due to the any reason. I won't claim any charges for conveyances etc. and will collect my belongings from the center within a week's time. If I fail to do so, there will be no responsibility of the center after the stipulated period.
                      </li>
                      <li>
                        I also understand that the ALTERNATIVE TO ADDICTION CREATING CENTRE, IRCA will not be responsible for anything in any case.
                      </li>
                    </ol>
                    
                    <p>
                      I have no objection against the Terms and Conditions mentioned above.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <div className="border-t border-black pt-2 text-center">
                          {undertaking.residentSignature ? (
                            <img 
                              src={undertaking.residentSignature} 
                              alt="Resident Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature of the Resident</span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <div className="border-t border-black pt-2 text-center">
                          {undertaking.guardianSignature ? (
                            <img 
                              src={undertaking.guardianSignature} 
                              alt="Guardian Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature of Parent/Guardian</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Page Break */}
                <div className="page-break" style={{ pageBreakAfter: 'always' }}></div>
                
                {/* Valuables Disclaimer Document */}
                <div className="mt-8">
                  <h1 className="text-xl font-bold text-center mb-2">Alternative to Addiction Creating Centre, IRCA</h1>
                  <h2 className="text-lg font-semibold text-center mb-6">VALUABLES DISCLAIMER</h2>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>At Rehab we strongly recommend that patients keep no valuables, no jewellery, no credit cards, or cash during their stay.</li>
                    <li>We recommend patients keep no items of personal value with them during their rehab center stay.</li>
                    <li>We strongly encourage patients to send all items of value home with family, friends or guardians for safekeeping.</li>
                    <li>In extenuating circumstances items of value can be placed in security trust with the center; that is in the Rehab safe.</li>
                    <li>I understand that Rehab does not take responsibility for items of value that I keep with me during my treatment.</li>
                    <li>I acknowledge Rehab's strong recommendation that I do not bring nor keep valuables with me during my treatment.</li>
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <div className="border-t border-black pt-2 inline-block min-w-[200px]">
                        Name: <u className="font-bold">{valuablesDisclaimer.patientName || '_________'}</u>
                      </div>
                      <div className="border-t border-black pt-2 inline-block min-w-[200px] mt-4">
                        Relation: <u className="font-bold">Patient</u>
                      </div>
                      <div className="border-t border-black pt-2 text-center mt-4">
                        {valuablesDisclaimer.patientSignature ? (
                          <img 
                            src={valuablesDisclaimer.patientSignature} 
                            alt="Patient Signature" 
                            className="h-12 mx-auto"
                          />
                        ) : (
                          <span>Signature</span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <div className="border-t border-black pt-2 inline-block min-w-[200px]">
                        Name: <u className="font-bold">{valuablesDisclaimer.guardianName || '_________'}</u>
                      </div>
                      <div className="border-t border-black pt-2 inline-block min-w-[200px] mt-4">
                        Relation: <u className="font-bold">{valuablesDisclaimer.guardianRelation || '_________'}</u>
                      </div>
                      <div className="border-t border-black pt-2 text-center mt-4">
                        {valuablesDisclaimer.guardianSignature ? (
                          <img 
                            src={valuablesDisclaimer.guardianSignature} 
                            alt="Guardian Signature" 
                            className="h-12 mx-auto"
                          />
                        ) : (
                          <span>Signature</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p>Date: <u className="font-bold">{valuablesDisclaimer.date || '_________'}</u></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}