'use client'
import { useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'

export default function SignaturePad({ onSave }) {
  const sigRef = useRef()
  const [isSigned, setIsSigned] = useState(false)

  const handleClear = () => {
    sigRef.current.clear()
    setIsSigned(false)
  }

  const handleSave = () => {
    if (sigRef.current.isEmpty()) {
      alert('Please provide a signature first')
      return
    }
    onSave(sigRef.current.toDataURL())
    setIsSigned(true)
  }

  return (
    <div className="space-y-3">
      <div className="border border-gray-300 rounded-lg bg-white p-2">
        <SignatureCanvas
          ref={sigRef}
          penColor="black"
          canvasProps={{
            width: 500,
            height: 200,
            className: 'w-full h-full bg-white'
          }}
          onEnd={() => setIsSigned(!sigRef.current.isEmpty())}
        />
      </div>
      
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Clear Signature
        </button>
        <button
          type="button"
          onClick={handleSave}
          className={`px-4 py-2 rounded-lg ${isSigned ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'} text-white`}
          disabled={!isSigned}
        >
          {isSigned ? 'Save Signature' : 'Sign Above'}
        </button>
      </div>
    </div>
  )
}