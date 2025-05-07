'use client'
import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export default function DeclarationForm() {
  // Form state
  const [formData, setFormData] = useState({
    declarant1Name: '',
    declarant1Age: '',
    declarant2Name: '',
    declarant2Age: '',
    aadhar1: '',
    aadhar2: '',
    address: '',
    patientName: '',
    patientRelation: '',
    patientAge: '',
    patientDob: '',
    patientAadhar: '',
    patientAddress: '',
    declarationDate: new Date().toISOString().split('T')[0],
    termsAgreed: false,
    treatmentUnderstood: false,
    lawsUnderstood: false,
    indemnityAgreed: false,
    declarant1Signature: '',
    declarant1Relationship: '',
    declarant2Signature: '',
    declarant2Relationship: '',
    witness1Name: '',
    witness2Name: ''
  })

  const [showHardcopy, setShowHardcopy] = useState(false)
  const hardcopyRef = useRef()

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Handle signature capture
  const handleSignature = (field, signature) => {
    setFormData(prev => ({
      ...prev,
      [field]: signature
    }))
  }

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.termsAgreed || !formData.treatmentUnderstood || 
        !formData.lawsUnderstood || !formData.indemnityAgreed) {
      alert('Please agree to all declaration terms')
      return
    }
    if (!formData.declarant1Signature) {
      alert('Declarant 1 signature is required')
      return
    }
    console.log('Form submitted:', formData)
    // API integration would go here
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
    documentTitle: 'Declaration_and_Indemnity_Form'
  })

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Main Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Declaration and Indemnity Form</h2>
          <p className="mt-1 text-sm text-gray-500">Legal declaration for treatment consent</p>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Declarant Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 border-b pb-2">
                Declarant Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Declarant 1 Name*
                  </label>
                  <input
                    type="text"
                    name="declarant1Name"
                    value={formData.declarant1Name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Declarant 1 Age*
                  </label>
                  <input
                    type="number"
                    name="declarant1Age"
                    value={formData.declarant1Age}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Declarant 2 Name
                  </label>
                  <input
                    type="text"
                    name="declarant2Name"
                    value={formData.declarant2Name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Declarant 2 Age
                  </label>
                  <input
                    type="number"
                    name="declarant2Age"
                    value={formData.declarant2Age}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhar Number (Declarant 1)*
                  </label>
                  <input
                    type="text"
                    name="aadhar1"
                    value={formData.aadhar1}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhar Number (Declarant 2)
                  </label>
                  <input
                    type="text"
                    name="aadhar2"
                    value={formData.aadhar2}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Address*
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={2}
                  required
                />
              </div>
            </div>

            {/* Patient Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 border-b pb-2">
                Patient Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Name*
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Relationship to Patient*
                  </label>
                  <select
                    name="patientRelation"
                    value={formData.patientRelation}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Select Relationship</option>
                    <option value="son">Son</option>
                    <option value="daughter">Daughter</option>
                    <option value="ward">Ward</option>
                    <option value="spouse">Spouse</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Age*
                  </label>
                  <input
                    type="number"
                    name="patientAge"
                    value={formData.patientAge}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth*
                  </label>
                  <input
                    type="date"
                    name="patientDob"
                    value={formData.patientDob}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhar Number*
                  </label>
                  <input
                    type="text"
                    name="patientAadhar"
                    value={formData.patientAadhar}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Address*
                </label>
                <textarea
                  name="patientAddress"
                  value={formData.patientAddress}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows={2}
                  required
                />
              </div>
            </div>

            {/* Declaration Terms */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 border-b pb-2">
                Declaration Terms
              </h3>
              
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    We confirm that the patient has voluntarily admitted themselves to the Alternative To Addiction Creating Centre, IRCA and we have granted our consent
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="treatmentUnderstood"
                    checked={formData.treatmentUnderstood}
                    onChange={handleChange}
                    className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    We have been informed about the entire treatment and medication process and understand the implications
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="lawsUnderstood"
                    checked={formData.lawsUnderstood}
                    onChange={handleChange}
                    className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    We understand the provisions of relevant laws including the Narcotics Drug and Psychotropic Substances Act 1985 and Drugs and Cosmetics Act 1940
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="indemnityAgreed"
                    checked={formData.indemnityAgreed}
                    onChange={handleChange}
                    className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    We agree to indemnify and hold harmless the rehabilitation center and its staff from all liabilities
                  </label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Declaration Date*
                  </label>
                  <input
                    type="date"
                    name="declarationDate"
                    value={formData.declarationDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Consent to Treatment Terms */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 border-b pb-2">
                Consent to Treatment Terms
              </h3>
              
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  1) We understand therapy is a three-tier process: Physical fitness (10 days-1 month), Mental fitness (~3 months), Spiritual changes (3-6 months)
                </p>
                <p className="text-sm text-gray-700">
                  2) We agree to attend family meetings to better understand the problem and support recovery
                </p>
                <p className="text-sm text-gray-700">
                  3) We understand medicines are limited to withdrawal symptoms and common ailments
                </p>
                <p className="text-sm text-gray-700">
                  4) We acknowledge visiting hours are from 10am to 12pm
                </p>
              </div>
            </div>

            {/* Signatures */}
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-medium text-gray-800 border-b pb-2">
                Signatures
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Declarant 1 Signature*
                  </h4>
                  <div className="border border-gray-300 rounded-lg p-2 h-40">
                    {formData.declarant1Signature ? (
                      <img 
                        src={formData.declarant1Signature} 
                        alt="Declarant 1 Signature" 
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <p className="text-gray-400 text-center h-full flex items-center justify-center">
                        Signature will appear here
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs text-gray-500 mb-1">
                      Relationship to Patient*
                    </label>
                    <input
                      type="text"
                      name="declarant1Relationship"
                      value={formData.declarant1Relationship}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Declarant 2 Signature
                  </h4>
                  <div className="border border-gray-300 rounded-lg p-2 h-40">
                    {formData.declarant2Signature ? (
                      <img 
                        src={formData.declarant2Signature} 
                        alt="Declarant 2 Signature" 
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <p className="text-gray-400 text-center h-full flex items-center justify-center">
                        Signature will appear here
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs text-gray-500 mb-1">
                      Relationship to Patient
                    </label>
                    <input
                      type="text"
                      name="declarant2Relationship"
                      value={formData.declarant2Relationship}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Witness 1 Name
                  </h4>
                  <input
                    type="text"
                    name="witness1Name"
                    value={formData.witness1Name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Witness 2 Name
                  </h4>
                  <input
                    type="text"
                    name="witness2Name"
                    value={formData.witness2Name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => setShowHardcopy(true)}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
                disabled={!formData.declarant1Name || !formData.patientName}
              >
                Preview Hardcopy
              </button>
              
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={!formData.termsAgreed || !formData.treatmentUnderstood || 
                         !formData.lawsUnderstood || !formData.indemnityAgreed ||
                         !formData.declarant1Signature}
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
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
                {/* Official Letterhead */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">Alternative To Addiction Creating Centre</h1>
                  <h2 className="text-xl font-semibold">IRCA</h2>
                  <div className="border-t-2 border-b-2 border-black py-2 my-2">
                    <h3 className="text-lg font-bold">DECLARATION AND INDEMNITY</h3>
                  </div>
                </div>

                {/* Document Content */}
                <div className="space-y-6">
                  <p className="text-justify">
                    I/We <u className="font-bold">{formData.declarant1Name || '_________'}</u> aged{' '}
                    <u className="font-bold">{formData.declarant1Age || '_________'}</u> years and{' '}
                    <u className="font-bold">{formData.declarant2Name || '_________'}</u> aged{' '}
                    <u className="font-bold">{formData.declarant2Age || '_________'}</u> years,
                  </p>
                  
                  <p className="text-justify">
                    Aadhar No. <u className="font-bold">{formData.aadhar1 || '_________'}</u>,{' '}
                    <u className="font-bold">{formData.aadhar2 || '_________'}</u> both presently residing at{' '}
                    <u className="font-bold">{formData.address || '_________'}</u> do hereby solemnly declare and state as under:
                  </p>
                  
                  <ol className="space-y-4 list-decimal pl-5">
                    <li>
                      We are the parents/guardians and spouse of Mr./Ms{' '}
                      <u className="font-bold">{formData.patientName || '_________'}</u> aged{' '}
                      <u className="font-bold">{formData.patientAge || '_________'}</u> D.O.B.{' '}
                      <u className="font-bold">{formData.patientDob || '_________'}</u>, Aadhar No.{' '}
                      <u className="font-bold">{formData.patientAadhar || '_________'}</u> presently residing at{' '}
                      <u className="font-bold">{formData.patientAddress || '_________'}</u>
                    </li>
                    
                    <li>
                      Our son/daughter/ward/spouse has voluntarily and of his/her own accord admitted himself/herself to the{' '}
                      <em>Alternative To Addiction Creating Centre</em>, <strong>IRCA</strong> run and managed by{' '}
                      <em>Alternative to Addiction Creating Centre</em>. We are aware of the same and have granted our consent and approval in that behalf.
                    </li>
                    
                    <li>
                      We state that we have been informed about the entire treatment and medication in details and that we are aware of the same and have granted our consent/approval in that behalf.
                    </li>
                    
                    <li>
                      We also confirm that the entire details of the said treatment and medication have been given in details to our son/daughter/ward/spouse and that he/she has fully understood the implications and consequences thereof.
                    </li>
                    
                    <li>
                      We along with our son/daughter/ward/spouse are aware the provision of the various rules, regulations bye-laws and guidelines in respect of the governing such treatment and medication as also all laws, rules, regulation and guidelines touching, relating to the same including the Narcotics Drug and Psychotropic substances Act 1985 and the Drugs and Cosmetics Act 1940 and the rules and regulations and bye-laws framed there under as also the all guidelines and notifications pertaining to the same.
                    </li>
                    
                    <li>
                      We declare and confirm that we have taken upon ourselves the entire responsibility liability risk and consequences as may arise during the said treatment and medication and that we shall not in any manner and at any time hereafter hold the said rehabilitation / De-addiction center, the said trustee members as well as the doctors, employees, staff, servants and representative liable and/or responsible in any matter whatsoever.
                    </li>
                    
                    <li>
                      We agree and undertake that we shall from time to time and at all times hereafter save harmless, indemnify and keep indemnified the said Rehabilitation/De-addiction Center, the said Trustees/members as also the Doctors, employees, staff, agents, representatives, servants and all such persons lawfully claiming under them or any of them or their estates and affects against all suits, actions, proceedings claims and demands the may be made taken or adopted against the said Rehabilitation /De-addiction center the said Trustees/Members as also the doctors, employees, staff, agents representatives servants and all such persons lawfully claiming under them by virtue of them having commenced, carried out treated and given any medication to our son/daughter/ward and also form and against any claim or demand made, taken or adopted by any Public body or authority or by any person or persons whomsoever under our instructions, directions, during the course of and after the completion of treatment and medications or otherwise howsoever and shall also indemnify and keep informed/indemnified the said Rehabilitation/De-addiction center,the Trustee/Members,as also the Doctors,employees,staff, service, agents, representatives and all persons legally claiming by and from under or in virtue of them or any of them having commenced, carried out, completed/terminated or stopped the said treatment and said medication or son/daughter/ward.
                    </li>
                    
                    <li>
                      We further agree and undertake that this indemnity shall ensure for the benefit of the said Rehabilitation/De-addiction center, the said Trustee/Members, the said employees, staff, agents, representatives and servants or any of them and all persons and claiming under them or any of them.
                    </li>
                    
                    <li>
                      We state that we are aware of all the statements and declarations made by our son/draughts/ward in the declaration-cum-indemnity executed by our said son/daughter/ward on this <u className="font-bold">{formData.declarationDate || '_________'}</u> day of <u className="font-bold">_________</u> 20<u className="font-bold">___</u> and we hereby confirm and ratify the same. We further state that we are fully aware of all the statements declarations and forms executed/filled in by our son/daughter/ward and ourselves, and we hereby confirm and ratify the same.
                    </li>
                    
                    <li>
                      We further agree and undertake that all statements, undertakings and indemnities herein contained shall remain in full force and effect for all times to come for the benefit of the said Rehabilitation/De-addition center, the said Trustee/Members, the said employees, staff, agents representatives and such other persons claiming under them or any of them or all time thereafter.
                    </li>
                    
                    <li>
                      We are making this declaration solemnly and sincerely without any force coercion of undue influence and the full force and effect should be given to all the statements and declarations mad by us herein above.
                    </li>
                    
                    <li className="flex items-start">
                      <span className="mr-2">12.</span>
                      <span>
                        The Contents of the above declaration have been explained in Hindi, in vernacular manner and I/We have understood the same well.
                      </span>
                    </li>
                  </ol>
                  
                  <div className="mt-8">
                    <p className="text-center">
                      Solemnly declared at this <u className="font-bold">{formData.declarationDate || '_________'}</u> day of <u className="font-bold">_________</u> 20<u className="font-bold">___</u>
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <div className="mb-12">
                          <p className="border-t border-black pt-2 inline-block min-w-[200px]">
                            1) <u className="font-bold">{formData.declarant1Name || '_________'}</u>
                          </p>
                          <p className="text-xs">Relationship: <u className="font-bold">{formData.declarant1Relationship || '_________'}</u></p>
                        </div>
                        <div className="border-t border-black pt-2 text-center">
                          {formData.declarant1Signature ? (
                            <img 
                              src={formData.declarant1Signature} 
                              alt="Declarant 1 Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature</span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-12">
                          <p className="border-t border-black pt-2 inline-block min-w-[200px]">
                            2) <u className="font-bold">{formData.declarant2Name || '_________'}</u>
                          </p>
                          <p className="text-xs">Relationship: <u className="font-bold">{formData.declarant2Relationship || '_________'}</u></p>
                        </div>
                        <div className="border-t border-black pt-2 text-center">
                          {formData.declarant2Signature ? (
                            <img 
                              src={formData.declarant2Signature} 
                              alt="Declarant 2 Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12">
                      <h4 className="font-bold mb-2">In the Presence of</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-t border-black pt-2">
                          1) <u>{formData.witness1Name || '_________'}</u>
                        </div>
                        <div className="border-t border-black pt-2">
                          2) <u>{formData.witness2Name || '_________'}</u>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Consent to Treatment Terms */}
                  <div className="mt-12 border-t-2 border-black pt-4">
                    <h3 className="font-bold text-center mb-4">CONSENT TO TERMS OF TREATMENT</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>
                        We have been informed that therapy is a three tier process consisting of
                        (a) Physical fitness that takes from 10 days to a month. (b) Mental fitness
                        that takes about 3 months after being abstinent from drugs. (c) Spiritual
                        changes (behavior, attitude, thinking, feeling etc.) that takes about 3 to 6
                        months depending upon severity of damage.
                      </li>
                      <li>
                        We have been informed that we have to attend the family meetings that
                        will help us to better understand the problem and help us to live a healthy,
                        purposeful and meaningful life and take full advantage of the program.
                      </li>
                      <li>
                        We have been informed that the role of medicine is very limited and is
                        provided on the advice of a qualified doctor and only for symptomatic
                        withdrawals and common ailments. For other problems the family has to
                        make arrangements in consultation with the attending staff member.
                      </li>
                      <li>
                        We have been informed that timings for meeting are from 10am to 12pm
                        noon.
                      </li>
                    </ol>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <div className="border-t border-black pt-2 inline-block min-w-[200px]">
                          1) <u className="font-bold">{formData.declarant1Name || '_________'}</u>
                        </div>
                        <div className="border-t border-black pt-2 text-center mt-4">
                          {formData.declarant1Signature ? (
                            <img 
                              src={formData.declarant1Signature} 
                              alt="Declarant 1 Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature</span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <div className="border-t border-black pt-2 inline-block min-w-[200px]">
                          2) <u className="font-bold">{formData.declarant2Name || '_________'}</u>
                        </div>
                        <div className="border-t border-black pt-2 text-center mt-4">
                          {formData.declarant2Signature ? (
                            <img 
                              src={formData.declarant2Signature} 
                              alt="Declarant 2 Signature" 
                              className="h-12 mx-auto"
                            />
                          ) : (
                            <span>Signature</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <p>In the Presence of</p>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="border-t border-black pt-2">
                          1) <u>{formData.witness1Name || '_________'}</u>
                        </div>
                        <div className="border-t border-black pt-2">
                          2) <u>{formData.witness2Name || '_________'}</u>
                        </div>
                      </div>
                    </div>
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